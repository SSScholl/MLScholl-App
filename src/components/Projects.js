import React from 'react';
import { Link } from 'react-router-dom'
import tictactoeImage from '../images/tic-tac-toe.png';

const projects = [
    {
        id: 1,
        title: 'Tic-Tac-Toe',
        description: 'This is the React Tic-Tac-Toe tutorial with some twists as I learn a little more about React.',
        image: tictactoeImage,
        link: 'tictactoe',
    },
    {
        id: 2,
        title: 'Snake',
        description: 'Snake project',
        image: 'https://via.placeholder.com/150',
        link: 'snake'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is yet another sample project',
        image: 'https://via.placeholder.com/150',
        link: 'https://project3.com'
    },
    {
        id: 4,
        title: 'Project 3',
        description: 'This is yet another sample project',
        image: 'https://via.placeholder.com/150',
        link: 'https://project3.com'
    },
];

function Projects() {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center my-4">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col" key={project.id}>
                <img className="w-full h-32 object-cover" src={project.image} alt={project.title} />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white my-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 py-2 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <Link
                    to={"../" + project.link}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg block"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  

export default Projects;