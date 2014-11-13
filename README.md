## Stuff to change

- title, repo, deployBranch in config (deployBranch should be gh-pages for projects, master for orgs)
- git config in travis.yml
- GH_REF in travis.yml
- [secure token](https://github.com/pwmckenna/node-travis-encrypt) in travis.yml ([instructions here](https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db) — syntax should be `travis-encrypt -r jonlong/static-site GH_TOKEN=TOKEN_GOES_HERE`)
- branch target in travis.yml

## Development

`gulp develop`

Creates a server and live-reloading development environment.

## Build Files

`gulp build`

Builds static site and compiles assets.

## Deploy to GitHub Pages

`gulp deploy`

Deploys built files to the `master` branch.