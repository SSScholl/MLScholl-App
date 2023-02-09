import React from 'react';
import { Link } from 'react-router-dom'

const projects = [
    {
        id: 1,
        title: 'Tic-Tac-Toe',
        description: 'This is a sample project',
        image: 'https://via.placeholder.com/150',
        link: 'https://project1.com',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is another sample project',
        image: 'https://via.placeholder.com/150',
        link: 'https://project2.com'
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
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-medium text-center my-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div className="bg-white rounded-lg shadow p-6" key={project.id}>
                        <img className="w-full h-32" src={project.image} alt={project.title} />
                        <h2 className="text-lg font-medium my-2">{project.title}</h2>
                        <p className="text-gray-700">{project.description}</p>
                        <Link to={"../tictactoe"}>
                            Dashboard
                        </Link>
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" href={project.link}>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;