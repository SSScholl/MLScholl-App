import React from 'react';

function AboutMe() {
  return (
    <div className="dark">
      <div className="container mx-auto py-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium mb-4">About Me</h1>
        <div className="w-full max-w-lg flex flex-col items-center">
          <img className="rounded-full w-40 h-40 mb-4" src="https://via.placeholder.com/150" alt="Michael Scholl" />
          <h2 className="text-xl font-medium mb-2">Michael Scholl</h2>
          <p className="text-gray-500 text-sm font-medium mb-4">Computer Engineer</p>
          <p className="text-gray-400 text-center mb-8">I am a computer engineer with a passion for coding and technology. I love solving problems and creating innovative solutions that make people's lives easier. In my free time, I enjoy working on personal coding projects, learning new programming languages, and playing video games.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
