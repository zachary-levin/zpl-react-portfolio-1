import React from "react";
// Insert 5 images (first is run-buddy, rest are placeholders)
// Later on, add small GitHub logos next to the works that link to the respective repos for each project.

function Project() {

    return (
    <div class="main-work">
        
        <a href="https://zachary-levin.github.io/run-buddy/">
            <img src="./assets/images/run-buddy.jpg" alt="Preview of Run Buddy website." />
        </a>

        
        <a href="https://dmevola.github.io/fruitfacts/" alt="Fruit Facts group project">
            <img src="./assets/images/fruitfacts-preview.png" alt="Preview of Fruit Facts application" />
        </a>

         
        <a href="https://evening-fjord-78812.herokuapp.com/" alt="Family Fit group project">
            <img src="./assets/images/family_fit.png" alt="Family Fit preview" />
        </a>
        <img src="./assets/images/calculator.jpg" alt="Preview of Calculator placeholder" />
        <img src="./assets/images/Led-wall-placeholder.png" alt="Preview of LED wall placeholder." />
        <img src="./assets/images/puzzle-pieces.jpg" alt="Preview of Puzzle Pieces placeholder." />
        <img src="./assets/images/surf.jpg" alt="Preview of Surf placeholder." />
    </div>
    )
}

export default Project;

// Projects:
// Run Buddy Module 1 and 2 Project, add a small Github logo image that links to the repo later on
// Fruit Facts Group Project 1 Application, make sure to add a small image that links to the repo later on
// Family Fit Group Project 2 Application, make sure to add a small image that links to the repo later on
