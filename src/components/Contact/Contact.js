// Add an image of the Gmail logo next to Email
// Add an image of the GitHub logo next to GitHub
// Add a download link for the Resume using "download tag" 
// Possibly add PDF image for Resume for users to click on

// Adjust spacing of page to look like rest of pages

import React from "react";

function Contact() {
    return (
        <div class="contact">

            <ul>
            <li>            
            <div class="email">
                
                <h1>
                    <a href="mailto:zlevin706@gmail.com">
                    Email
                    </a>
                </h1>

                <div class="email-image">

                </div>
                
            </div>
            </li>

            <li>
            <div class="github">
                
                <h1>
                    <a href="https://github.com/zachary-levin" >
                    GitHub
                    </a>
                </h1>

                <div class="github-image">

                </div>

            </div>
            </li>

            <li>
            <div class="resume">

                <h1>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSGC-aekBuZiIwVzv3PVb5ThQrEn-HfTMyts4n7BtolGHAtA_X_eUPjp9s-kJYIK69qSxHjsRpliJ9j/pub">
                    Resume
                    </a>
                </h1>

            <div class="resume-image">

            </div>
            
            </div>

            </li>
            
            </ul>
        </div>
    )
}

export default Contact;