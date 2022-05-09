import React from 'react';
import '../../App.css';

export default function About() {
  return (

    <div>
      <h1>About Page</h1>
      <img className='about-subtitle' alt="Me" src={require(`../../images/Nice-pic-of-me.jpg`)} />
      <p>
        My name is Zachary Levin. I am a Full-Stack web developer pivoting from a game development background. I have a bachelor’s degree in Media Arts and Game Design from UW-Whitewater. 
        I recently obtained a certificate in full stack development from Michigan State University, with newly developed skills in JavaScript, Node.js, React.js, and responsive web design. 
        I'm a problem solver who is always looking to improve and grow, with a focus on mobile-first design and practical applications. 
        With each project, my aim is to create something that I would want to use myself and is easy to understand for other developers. 
        I recently worked on a team of four to take an existing README generator project and increased the scale on it. 
        We created a single-page MERN application focused around the README generator that allows users to login with a username, email, and password to create a professional README. 
        I am excited to leverage the skills I have gained from my certification to deliver applications that build better experiences for users on the web. 
      </p>
    </div>
  );
}
