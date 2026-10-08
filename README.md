# Mariam Alkhayyat — Architecture Portfolio

Plain HTML, CSS and JavaScript. No build step or package installation.

Serve this folder with a local static HTTP server and open login.html.
For example, if Python is installed: `python -m http.server 8000 --bind 127.0.0.1`.

To enable accounts, fill config.js with your Supabase project URL and browser-safe
publishable key. Never use a secret or service-role key. Enable email/password
authentication in Supabase. Set its site URL to the deployed address and allow
the deployed login.html confirmation redirect (and the local HTTP login.html
address for testing). Test sign up, email confirmation, log in and log out using
your own test account. Signed-out portfolio pages redirect to login.html.

Authentication is not configured in this commit. Page structure, navigation and
authentication code are implemented; real account behaviour remains unverified.
Project counts, titles, images, descriptions, email and visual-work filenames
need confirmation. No placeholder describes an actual supplied project.

Before publishing, choose the entrance and share images and use absolute public
URLs for sharing metadata. images/share.png is a temporary typographic image.
Static page and image files remain publicly retrievable despite the login gate.
