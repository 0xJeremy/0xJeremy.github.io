This repository holds the source code for [jeremykanovsky.com](https://jeremykanovsky.com/) and [0xJeremy.github.io](https://0xjeremy.github.io/).

### How to publish

To publish a new version of this site, use `npm run deploy`. This command will build a production version of the website, move it to the `gh-pages` branch, and push it to the remote repository (remote must be named `origin`).

IMPORTANT: The domain `jeremykanovsky.com` MUST be configured after each push on GitHub (alternatively, a CNAME file must be added to the repo for GitHub to recognize it).
