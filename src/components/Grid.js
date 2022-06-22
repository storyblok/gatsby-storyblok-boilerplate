import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;