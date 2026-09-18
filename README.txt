NCCB Sales Commission Portal v1.6 — Netlify Proxy Login Fix

WHY:
The Apps Script health page works directly, but the browser login request hangs.
v1.6 routes browser API calls through a same-origin Netlify Function, which then calls Apps Script server-to-server.
It also adds a 15-second timeout so "Signing in..." can never spin forever.

UPLOAD ALL THREE ITEMS TO THE ROOT OF THE GITHUB REPOSITORY:
1. index.html
2. netlify.toml
3. netlify/functions/nccb-api.js  (preserve these folders)

Then commit + push. Netlify must complete a fresh deploy.
Hard refresh the live site with Ctrl+Shift+R and login again.

Do not change the Google Sheet, password hash, salt, or Apps Script deployment.
