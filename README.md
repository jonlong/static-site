# Static Site

[![Build Status](https://travis-ci.org/jonlong/static-site.svg?branch=master)](https://travis-ci.org/jonlong/static-site)

Javascript-based static site scaffolding. Auto-deploys public repos to GitHub Pages via TravisCI, or with one command locally.

Compiled with [Metalsmith](https://github.com/segmentio/metalsmith) and configured for [Swig](https://github.com/paularmstrong/swig/) templates.

![screenshot](https://cloud.githubusercontent.com/assets/482527/6241347/857eef80-b6e9-11e4-9e0a-9d1c3fd49aa5.jpg)

## What's in the box?

The Gulpfile, based on [greypants' great starter repo](https://github.com/greypants/gulp-starter/), contains a ton of configurable tasks. Check out the [gulp/tasks](https://github.com/jonlong/static-site/blob/master/gulp/tasks/) directory for a complete look.

The sample site is generated with the following tools: 

- [Browserify](http://browserify.org/) for JS management
- Image compression and automatic SVG spriting ([using SVG symbols](http://css-tricks.com/svg-symbol-good-choice-icons/))
- Sass compilation
- A starter Sass structure (based on [cssguidelin.es](cssguidelin.es))

Configure the site via the [app-level config file](https://github.com/jonlong/static-site/blob/master/config.js), and the [Gulp task config](https://github.com/jonlong/static-site/blob/master/gulp/config.js), and check out the [build](https://github.com/jonlong/static-site/blob/master/gulp/tasks/build.js) and [watch](https://github.com/jonlong/static-site/blob/master/gulp/tasks/watch.js) tasks to see how it all comes together.

## Quick Start

### Install Dependencies

**NB:** This project eschews [libsass](github.com/sass/libsass) in favor of native (Ruby-based) Sass. As a result, it's a little more stable and compatible with most SCSS frameworks, but the tradeoff is that Ruby and [Bundler](bundler.io) are local dependencies.

- `gem install bundler`
- `bundle install`
- `npm install -g gulp`
- `npm install -g bower`
- `npm install`
- `bower install`

### Launch Development Environment

`gulp`

Creates a server and live-reloading development environment.

### Deploy to GitHub Pages

`gulp deploy`

Deploys built files to the deploy branch specified in [config.js](https://github.com/jonlong/static-site/blob/master/config.js).

## Auto-Deployment Setup

### Configure Travis-CI

- [Sign Up](https://travis-ci.org/) for an account with Travis-CI, and connect your public GitHub repos.
- In [config.js](https://github.com/jonlong/static-site/blob/master/config.js), change the `repo` and `deployBranch` values accordingly. For organization pages, `deployBranch` should be `master`. For project pages, it should be `gh-pages`.

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
