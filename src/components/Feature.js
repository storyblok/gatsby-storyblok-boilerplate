import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.name}</h2>
      <p>{blok.description}</p>
    </div>
  );
};

export default Feature;