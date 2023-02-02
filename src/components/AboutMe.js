import React, { useState, useEffect } from 'react';

/* const AboutMe = () => {
  return (
    <div className="about-me">
      <h1 className="text-2xl font-medium mb-2">About Me</h1>
      <p className="text-base leading-relaxed mb-4">
        My name is Michael Scholl and I am a computer engineer with a passion for building and creating innovative technology. I have a strong background in software development, machine learning, and computer networks. I am always looking for new challenges and opportunities to learn and grow as a professional.
      </p>
      <p className="text-base leading-relaxed mb-4">
        I have experience in a variety of programming languages including C++, Python, and JavaScript. I am also familiar with various web development frameworks such as React, Angular, and Vue.js. I have worked on various projects in my field such as building machine learning models, creating mobile and web applications, and designing and implementing computer networks.
      </p>
    </div>
  );
}; */

//export default AboutMe;

const AboutMe = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deltaX, setDeltaX] = useState(2);
  const [deltaY, setDeltaY] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextX = x + deltaX;
      let nextY = y + deltaY;

      if (nextX + 50 >= window.innerWidth || nextX <= 0) {
        setDeltaX(deltaX * -1);
        nextX = x + deltaX;
      }
      if (nextY + 50 >= window.innerHeight || nextY <= 0) {
        setDeltaY(deltaY * -1);
        nextY = y + deltaY;
      }

      setX(nextX);
      setY(nextY);
    }, 50);

    return () => clearInterval(intervalId);
  }, [x, y, deltaX, deltaY]);

  return (
    <div
    
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: 500,
        height: 500,
        backgroundImage: `url(https://en.wikipedia.org/wiki/File:Nicolas_Cage_Deauville_2013.jpg)`,
        backgroundSize: 'cover'
      }}
    />
    
  );
};

export default AboutMe;