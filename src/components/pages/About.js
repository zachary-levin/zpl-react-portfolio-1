import React from 'react';
import '../../App.css';

export default function About() {
  return (

    <div>
      <h1>About Page</h1>
      <img className='about-subtitle' alt="Me" src={require(`../../images/Nice-pic-of-me.jpg`)} />
      <p>
        My name is Zachary Levin. (FINISH BIO HERE)
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
