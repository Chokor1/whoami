# whoami

Personal site of Abbass Chokor, ERP Project Manager (ERPNext implementation, functional and technical consulting).

Static site with no build step and no dependencies beyond Google Fonts.

## Files

```
index.html             Page content
styles.css             Styles, light and dark themes
script.js              Theme toggle, mobile menu, scroll reveal
abbass_chokor_cv.pdf   CV linked from the "Download CV" buttons
Images/                Portrait photo
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Updating

- Content lives in `index.html` and follows the CV section by section.
- To publish a new CV, replace `abbass_chokor_cv.pdf` (keep the file name).
- Colours and fonts are the variables at the top of `styles.css`.
