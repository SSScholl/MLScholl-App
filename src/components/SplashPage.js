import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link, animateScroll as scroll } from "react-scroll";
import hexagonOptions from './particle-options/hexagon.json';

import Card from './Card';



const SplashPage = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        //https://codesandbox.io/s/42ps4y?file=/src/App.js:324-2223
        //https://codepen.io/matteobruni/pen/ZExaQyB
        ///https://particles.js.org/
        //await loadPolygonPath(engine);
      }, []);
    
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      }, []);

    return (

        
        <div className="bg-cover bg-center h-screen">
            <Particles id="tsparticles" options={hexagonOptions} init={particlesInit} loaded={particlesLoaded} />
            <div className="flex items-center justify-center h-full">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-white text-5xl hover:text-gray-400"
                    onClick={() => scroll.scrollTo(650)}
                >
                    <i className="fas fa-arrow-down"></i>
                </Link>
            </div>
            <section id="projects" className="container mx-auto py-8">
                <h2 className="text-3xl font-medium text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg font-medium">Project 1</h3>
                        <p className="text-gray-700">
                            A brief description of the project and the technologies used.
                        </p>
                        <a href="#" className="btn bg-indigo-800 text-white">
                            View on GitHub
                        </a>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg font-medium">Project 2</h3>
                        <p className="text-gray-700">
                            A brief description of the project and the technologies used.
                        </p>
                        <a href="#" className="btn bg-indigo-800 text-white">
                            View on GitHub
                        </a>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg font-medium">Project 3</h3>
                        <p className="text-gray-700">
                            A brief description of the project and the technologies used.
                        </p>
                        <a href="#" className="btn bg-indigo-800 text-white">
                            View on GitHub
                        </a>
                        <Card />
                    </div>
                </div>
            </section>

            <section id="experience" className="container mx-auto py-8">
                <h2 className="text-3xl font-medium text-center">Experience</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg font-medium">Company 1</h3>
                        <p className="text-gray-700">
                            Position held and a brief description of responsibilities
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg font-medium">Company 2</h3>
                        <p className="text-gray-700">
                            Position held and a brief description of responsibilities
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="container mx-auto py-8">
                <h2 className="text-3xl font-medium text-center">Contact</h2>
                <form className="bg-white rounded-lg p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="bg-gray-200 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            className="bg-gray-200 rounded-lg p-2"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn bg-indigo-800 text-white">
                            Send
                        </button>
                    </div>
                </form>
            </section>

            <footer className="bg-indigo-800 text-white text-center py-4">
                <p>Copyright © {new Date().getFullYear()} My Name</p>
            </footer>
        </div>
    )
}

export default SplashPage;