# Ryan Daich · Personal Portfolio

A responsive personal website built with HTML, CSS, and browser JavaScript. The project presents experience, education, skills, certifications, and community leadership in a single-page layout.

[Current GitHub profile](https://github.com/Boat1x) · [LinkedIn](https://www.linkedin.com/in/ryan-daich)

## Project at a glance

| Area | Implementation |
| --- | --- |
| Interface | Static HTML with custom CSS and responsive layouts |
| Navigation | Desktop navigation, mobile menu, section links, and a back-to-top control |
| Experience | Interactive tabs with matching content panels |
| Skills | Category controls that highlight related skills |
| Motion | Typed.js headline animation, scroll indicator, and hover transitions |
| Contact | LinkedIn and email links |
| Resume | PDF download from the `resume/` directory |
| Tooling | No package installation, bundler, or build step |

## Run locally

Clone the repository and start a small static server from its root:

```bash
git clone https://github.com/Boat1x/Ryan-Daich-site.git
cd Ryan-Daich-site
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000).

Python 3 is used only to serve the files during local development. The site itself runs in the browser. You can also open `index.html` directly; an HTTP server provides a more representative environment for the resume download.

Font Awesome and Typed.js are loaded from cdnjs, so those assets require an internet connection. No application credentials or environment variables are needed.

## Source guide

| File or directory | Responsibility |
| --- | --- |
| [`index.html`](index.html) | Page structure, career content, section navigation, and external links |
| [`styles.css`](styles.css) | Main layout, colors, spacing, and responsive styles |
| [`additional_styles.css`](additional_styles.css) | Additional styling for interface components |
| [`typing-animation.css`](typing-animation.css) | Headline animation styling |
| [`script.js`](script.js) | Mobile menu, experience tabs, scrolling, contact links, and resume download |
| [`enhanced-script.js`](enhanced-script.js) | Skill highlighting, scroll progress, and additional interactions |
| [`typing-animation.js`](typing-animation.js) | Typed.js initialization and fallback headline text |
| [`images/`](images/) | Portrait, logo, and icons |
| [`resume/`](resume/) | Downloadable resume PDF |

The entry page loads `script.js`, `typing-animation.js`, and `enhanced-script.js`. The repository also contains `main.js`, `enhanced-styles.css`, and standalone JSX components that are not loaded by this page. There is no configured React application or React build pipeline in this repository.

## Design and implementation

The site keeps content and presentation in ordinary browser files. This makes the page easy to inspect and edit without a framework setup. CSS handles the layout; JavaScript adds navigation, tabs, skill highlighting, and visual effects.

The skill controls highlight matching entries instead of removing them from the page. The experience tabs update the selected state and visibility of their corresponding panels. Contact actions open LinkedIn or the visitor's email client; the repository does not contain a form-processing backend.

## Project status

This repository preserves an earlier version of my personal portfolio. Its career copy and bundled resume are historical; my [GitHub profile](https://github.com/Boat1x) and [LinkedIn](https://www.linkedin.com/in/ryan-daich) provide current professional context.

The repository does not currently include an automated test suite or CI workflow. The two active interaction scripts overlap in some event handling, so a future cleanup should consolidate those handlers before adding more behavior.

## Contact

[Ryan Daich on LinkedIn](https://www.linkedin.com/in/ryan-daich) · [GitHub](https://github.com/Boat1x)

