# Introduction

This repo is a Gatsby [Storyblok](https://www.storyblok.com) starter template used in following tutorial:
[www.storyblok.com/tp/gatsby-multilanguage-website-tutorial](https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial)

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [www.storyblok.com](https://www.storyblok.com).

## Getting started

1. Get the source code and install dependencies.
~~~
git clone https://github.com/storyblok/gatsby-storyblok-boilerplate.git
cd gatsby-storyblok-boilerplate
npm install
~~~

2. Exchange the `accessToken` in `gatsby-config.js` with the preview token of a new empty Storyblok space which you can find on the space settings page.

3. Start the project with `gatsby develop` and set the preview domain in Storyblok to `http://localhost:8000/editor?path=`

## Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `gatsby develop`
Run in the project locally for development.

### `gatsby build`
Run a production build into ./public. The result is ready to be put on any static hosting you prefer.

### `gatsby deploy`
Run a production build into ./public and publish the site to GitHub pages.