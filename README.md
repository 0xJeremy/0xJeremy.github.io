This repository holds the source code for [jeremykanovsky.com](https://jeremykanovsky.com/) and [0xJeremy.github.io](https://0xjeremy.github.io/).

### How to publish

To publish a new version of this site, use `npm run deploy`. This command will build a production version of the website, move it to the `gh-pages` branch, and push it to the remote repository (remote must be named `origin`).

IMPORTANT: The domain `jeremykanovsky.com` MUST be configured after each push on GitHub (alternatively, a CNAME file must be added to the repo for GitHub to recognize it).

### //TODO:

- [ ] Make header travel with scroll
- [ ] Add load-in animation to homepage
- [ ] Moderize the projects page according to style
- [ ] Remove research page
- [ ] Clean up mobile version
	- [ ] Make nav menu disappear on click-out
	- [ ] Make showcase projects prettier
	- [ ] Clean About section
- [ ] Remove unnecessary(?) fonts

### Color Scheme

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/20/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/20/112240?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/20/233554?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/20/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/20/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/20/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/20/e6f1ff?text=+) `#e6f1ff` |
| Orange         | ![#FF7F11](https://via.placeholder.com/20/FF7F11?text=+) `#FF7F11` |

