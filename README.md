# Gatsby.js Storyblok Boilerplate
This repository is a Gatsby.js [Storyblok](https://www.storyblok.com/) starter template used in following [5 minute tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-gatsby-5-minutes).

## Requirements
To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com/), it's free.

## How to get started?
Read the [Gatsby.js tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-gatsby-5-minutes) about connecting Storyblok and Gatsby.js

### 1. Clone the repo
```
git clone https://github.com/storyblok/gatsby-storyblok-boilerplate.git
```

### 2. Install all dependecies
```
yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in gatsby-config.js.

```js
// in gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'YOUR-PREVIEW-TOKEN',
        version: 'draft',
        localAssets: true,
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    }
  ],
}
```

### 4. Run your project
Set the preview domain in Storyblok to http://localhost:8000/

```
# to run in developer mode
yarn develop # or npm run develop
```

```
# to build your project
yarn build # or npm run build
```

## Resources
- [Gatsby.js docs](https://www.gatsbyjs.com/docs/)
- [Storyblok Tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-gatsby-5-minutes)

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-default)
