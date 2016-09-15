# Pacman

Top-secret Riot-Redux project

## Overview

TBD...

## Build

```
npm install
webpack -p
```

Minified tag script is in `dist/bundle.js`. Run `dist/index.html` to see the app in action.

## Development

Run `webpack-dev-server` in the root directory for all the intended benefits.

## Deployment

1. Run `webpack -p`. Minified tag script is in `dist/budnle.js`.
2. Delete everything except dist folder.
3. Move contents of dist folder to root directory
4. Push to gh-pages