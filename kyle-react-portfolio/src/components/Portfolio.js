import React from "react";
import data from "../data/data.json";
const Portfolio = () => {
  //   const { title, description, image, altImage, link, github } = data.portfolio;
  data.portfolio.map((portfolio, index) => {
    return (
      <div key={index}>
        <h2 id="projects">Portfolio</h2>
        <section class="project" id="project-1">
          <a target="_blank" href={portfolio.link} rel="noreferrer">
            <img
              src={`/assets/Portfolio-Stock-Images/${portfolio.image && portfolio.image}`}
              alt={portfolio.altImage}
            />
          </a>
          <h3>{portfolio.title}</h3>
          <p>{portfolio.description && portfolio.description}</p>
          <a target="_blank" href={portfolio.github} rel="noreferrer">
            GitHub Repo: {portfolio.github}
          </a>
        </section>
      </div>
    );
  });
};

export default Portfolio;
