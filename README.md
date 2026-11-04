# Easified promo site
Static HTML/CSS/JS (no build step). Open `index.html` or `python3 -m http.server`.
Before deploy, replace `SITE_URL` in index.html (canonical, og:url, og:image, JSON-LD) with the real domain:
`sed -i 's/SITE_URL/www.example.co.za/g' index.html`
`node screenshot.mjs http://localhost:8080/` regenerates shots/ (needs playwright).
