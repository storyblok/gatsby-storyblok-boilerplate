# Storyblok Gatsby Boilerplate

This repository is a Gatsby [Storyblok](https://www.storyblok.com) starter template used in following [tutorial](https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial).

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## Getting started

### 1. Get the source code.

```sh
  $ git clone https://github.com/storyblok/gatsby-storyblok-boilerplate.git
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Exchange the `accessToken` in `gatsby-config.js` with the preview token of a new empty <strong>Storyblok</strong> space which you can find on the space settings page.

```js
// in gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: 'Your_Accesse_Token_Here',
      homeSlug: 'home',
    }
  }
]
```

### 4. Run your project
Set the preview domain in Storyblok to `http://localhost:8000/editor?path=`

```sh
# to run in developer mode
$ yarn develop # or npm run develop
```

```sh
# to build your project
$ yarn build # or npm run build
```

---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>