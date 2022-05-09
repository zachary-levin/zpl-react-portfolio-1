import React from "react";
// Insert 5 images (first is run-buddy, rest are placeholders)
// Later on, add small GitHub logos next to the works that link to the respective repos for each project.

import fruitFacts from '../../images/fruitfacts-preview.png';
// Images can be imported either with 'import (const variable used for image) from 'path';' then putting the const in curly brackets after 'src='.
// OR by doing 'src={require(path for image)}' 
import '../../App.css';

function Project() {

    return (
    <div class="main-work">
        
        <div>
            <img src={require("../../images/run-buddy.jpg")} alt="Preview of Run Buddy website." id="bigImage" />
            <div className="hide text-title">
                <a href="https://zachary-levin.github.io/run-buddy/" >
                    Run Buddy
                </a>
            </div>
        </div>

        
        <a href="https://dmevola.github.io/fruitfacts/"  alt="Fruit Facts group project">
            <img src={fruitFacts} alt="Preview of Fruit Facts application" id="smallImage" />
        </a>

         
        <a href="https://evening-fjord-78812.herokuapp.com/"  alt="Family Fit group project">
            <img src={require("../../images/family_fit.png")} alt="Family Fit preview" id="smallImage" />
        </a>

    </div>
    )
}

export default Project;

// Projects:
// Run Buddy Module 1 and 2 Project, add a small Github logo image that links to the repo later on
// Fruit Facts Group Project 1 Application, make sure to add a small image that links to the repo later on
// Family Fit Group Project 2 Application, make sure to add a small image that links to the repo later on

// Placeholder images code:
/*
        <img src={require("../../images/calculator.jpg")} alt="Preview of Calculator placeholder" />
        <img src={require("../../images/Led-wall-placeholder.png")} alt="Preview of LED wall placeholder." />
        <img src={require("../../images/puzzle-pieces.jpg")} alt="Preview of Puzzle Pieces placeholder." />
        <img src={require("../../images/surf.jpg")} alt="Preview of Surf placeholder." />
*/