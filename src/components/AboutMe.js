import React from 'react';

function AboutMe() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-medium">About Me</h1>
      <img src="path/to/image" alt="My headshot" className="w-32 h-32 rounded-full mx-auto my-4" />
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna sit amet congue pretium, 
        augue augue congue ipsum, non placerat elit purus et nulla. Sed id nulla quis mauris blandit tristique.
      </p>
    </div>
  );
}

export default AboutMe;