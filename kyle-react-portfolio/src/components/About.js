import React from "react";
import data from "../data/data.json";

function About() {
  const {role, bio, image, altImage} = data.about
  return (
    <div>
      <img
        class="profile"
        src={`/assets/Portfolio-Stock-Images/${image && image}`}
        alt={altImage}
      />
      <h2>{role && role }</h2>
      <p>
        { bio && bio }
      </p>
    </div>
  );
}

export default About;
