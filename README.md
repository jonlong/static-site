# Static Site

[![Build Status](https://travis-ci.org/jonlong/static-site.svg?branch=master)](https://travis-ci.org/jonlong/static-site)

Javascript-based static site scaffolding. Auto-deploys public repos to GitHub Pages via TravisCI, or with one command locally.

Compiled with [Metalsmith](https://github.com/segmentio/metalsmith) and configured for [Swig](https://github.com/paularmstrong/swig/) templates.

## Setup

### Install Dependencies

- `npm install -g gulp`
- `npm install -g bower`
- `bower install`

### Configure Travis-CI

- [Sign Up](https://travis-ci.org/) for an account with Travis-CI, and connect your public GitHub repos.
- In [config.js](https://github.com/jonlong/static-site/blob/master/config.js), change the `repo` and `deployBranch` values accordingly. For organization pages, `deployBranch` should be `"master"`. For project pages, it should be `gh-pages`.

#### Configure travis.yml

- Change the Git config settings in [travis.yml](https://github.com/jonlong/static-site/blob/master/.travis.yml). You can use your current `user.email` configuration, but it helps to change the name to indicate that Travis-CI is the committer.
- Add any external preinstall commands your app depends on for compilation in the `before_install` or `before_script` list.
- Change the `branches` setting indicate which branch(es) Travis-CI should listen to for updates (this should be something other than `master` if you are building an Organization Page).
- Change the `GH_REF` setting to your repo's url.

#### Add A GitHub Access Token for Deployment

- Go to [your GitHub settings](https://github.com/settings/applications) and create a new **Personal Access Token** with `public_repo` permissions. Copy the result.
- Install [node-travis-encrypt](https://github.com/pwmckenna/node-travis-encrypt) to create a secure token for Travis-CI by running `npm install -g node-travis-encrypt`.
- Run `travis-encrypt -r githubUsername/repoName GH_TOKEN=accessToken`, replacing `githubUsername`, `repoName`, and `accessToken` with your own values.
- Add the resulting string to the `secure` setting in [travis.yml](https://github.com/jonlong/static-site/blob/master/.travis.yml).

## Development

`gulp`

Creates a server and live-reloading development environment.

## Build Files

`gulp build`

Builds static site and compiles assets.

## Deploy to GitHub Pages

`gulp deploy`

Deploys built files to the deploy branch specified in [config.js](https://github.com/jonlong/static-site/blob/master/config.js).
