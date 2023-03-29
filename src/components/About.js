import React, { useState } from "react";

const About = ({ setCurrentPage }) => {
  return (
    <div id="info">

    {/* <div id="profile">
      <p>
        
      </p>
    </div> */}

      <p id="hello">Hello! My name is David Yu!</p>
      <p id="intro">
        I am an aspiring front-end/UI developer, focusing on creating user friendly
        applications. I have graduated from the Rutgers full stack flex coding bootcamp, and have decided to focus my time and efforts into front end development and creating UI designs that create a clean environment within web applications. My skillset is geared towards front end development including HTML, CSS, Javascript, API interactions, Bootstrap, React, and Figma. 
      </p>

      {/* <div id="skills">
        <img id="figma" src="./images/Figma.png" alt="Figma"></img>
        <img id="css" src="./images/css.png" alt="CSS"></img>
        <img id="js" src="./images/JS.png" alt="JS"></img>
        <img id="react" src="./images/React.png" alt="React"></img>
        <img id="html" src="./images/html.png" alt="html"></img>
         <img id="github" src="./images/github.png" alt="github"></img>
      </div> */}
    </div>
  );
};

export default About;
