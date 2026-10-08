# Mariam Alkhayyat — Architecture Portfolio

Plain HTML, CSS and JavaScript. No build step or package installation.

Serve this folder with a local static HTTP server and open login.html.
For example, if Python is installed: `python -m http.server 8000 --bind 127.0.0.1`.

config.js contains the supplied Supabase project URL and browser-safe publishable
key. Never use a secret or service-role key. In the Supabase dashboard, enable
email/password authentication. Set the Site URL to
https://mariam-alkhayyat-architecture.vercel.app/ and add the allowed redirect
https://mariam-alkhayyat-architecture.vercel.app/login.html (and the local HTTP
login.html address for testing). Test sign up, email confirmation, log in and log out using
your own test account. Signed-out portfolio pages redirect to login.html.

The login gate is configured in the local site. Dashboard settings require
project administration access; a publishable key cannot change them.
Mariam confirmed the full local browser flow on October 8, 2026: signup, login,
browsing, logout and signed-out redirection to login.html all work. Supabase URL
configuration is complete, as confirmed by Mariam. Deployment testing remains
separate from this local check.
The read-only Auth settings check confirmed email login and signup are enabled,
and email confirmation is currently disabled. Signup therefore enters the
portfolio if Supabase returns a session. If confirmation is enabled later,
the page tells the visitor to check their email before continuing.
Project counts, titles, images, descriptions, email and visual-work filenames
need confirmation. No placeholder describes an actual supplied project.

Live address: https://mariam-alkhayyat-architecture.vercel.app/.
Page sharing and canonical metadata use this public address. images/share.png
is a temporary typographic image; choose the final entrance and project share
images when available. Redeploy local changes to update the live previews.
Static page and image files remain publicly retrievable despite the login gate.
