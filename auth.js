(() => {
  "use strict";
  const gated = document.body.hasAttribute("data-gated");
  const form = document.querySelector("#auth-form");
  const status = document.querySelector("#auth-status");
  const notice = document.querySelector("#auth-notice");
  const portfolio = document.querySelector("#portfolio");
  const config = window.PORTFOLIO_CONFIG || {};
  let client;
  let busy = false;
  const say = (message) => { if (status) status.textContent = message; };
  const redirect = () => window.location.replace("login.html");
  const reveal = () => { portfolio.hidden = false; notice.hidden = true; };
  const lock = () => { if (portfolio) portfolio.hidden = true; };
  const unavailable = (message) => {
    if (gated) { lock(); redirect(); }
    else { say(message); if (form) for (const button of form.querySelectorAll("button")) button.disabled = true; }
  };
  const setBusy = (value) => {
    busy = value;
    for (const element of form.querySelectorAll("input, button")) element.disabled = value;
    form.setAttribute("aria-busy", String(value));
  };
  async function submit(signup) {
    if (busy || !client || !form.reportValidity()) return;
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    setBusy(true);
    say(signup ? "Creating your account…" : "Logging in…");
    try {
      const credentials = { email, password };
      if (signup) credentials.options = { emailRedirectTo: new URL("login.html", window.location.href).href };
      const { data, error } = signup ? await client.auth.signUp(credentials) : await client.auth.signInWithPassword(credentials);
      if (error) throw error;
      if (data.session) window.location.assign("index.html");
      else say(signup ? "Check your email for a confirmation link, then return here to log in." : "No session was created. Please try logging in again.");
    } catch (error) {
      say(error.message || "Unable to connect. Please try again.");
    } finally {
      document.querySelector("#password").value = "";
      setBusy(false);
    }
  }
  async function initialize() {
    if (!/^https:\/\//.test(config.supabaseUrl || "") || !config.supabasePublishableKey) {
      unavailable("Login is not configured yet. The Supabase project URL and publishable key are needed.");
      return;
    }
    if (!/^https?:$/.test(window.location.protocol)) {
      unavailable("Open this site over HTTP or HTTPS to use login.");
      return;
    }
    if (!window.supabase) {
      unavailable("The login service could not load. Check your connection and reload this page.");
      return;
    }
    try {
      client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey);
      // Register first so sign-out in another tab also immediately hides content.
      client.auth.onAuthStateChange((_event, session) => {
        if (gated) { if (session) reveal(); else { lock(); redirect(); } }
        else {
          const signedIn = document.querySelector("#signed-in");
          signedIn.hidden = !session;
          form.hidden = Boolean(session);
          if (session) say("You are logged in.");
        }
      });
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (gated) { if (!data.session) { redirect(); return; } reveal(); }
      else {
        document.querySelector("#signed-in").hidden = !data.session;
        form.hidden = Boolean(data.session);
        say(data.session ? "You are logged in." : "");
      }
      for (const button of document.querySelectorAll("[data-logout]")) {
        button.addEventListener("click", async () => {
          button.disabled = true;
          try {
            const { error } = await client.auth.signOut();
            if (error) throw error;
            lock();
            window.location.replace("login.html");
          } catch (error) {
            document.querySelector("#logout-status").textContent = error.message || "Unable to log out. Please try again.";
            button.disabled = false;
          }
        });
      }
    } catch (error) {
      unavailable("Unable to check your session. Reload the page to try again.");
    }
  }
  if (form) {
    form.addEventListener("submit", (event) => { event.preventDefault(); submit(false); });
    document.querySelector("#signup-button").addEventListener("click", () => submit(true));
  }
  initialize();
})();
