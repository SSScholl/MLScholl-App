import React from "react";

const SplashPage = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <section id="about" className="container mx-auto py-8">
                <h2 className="text-3xl font-medium text-center">About</h2>
                <p className="text-gray-700 text-center">
                    I am a computer engineer with experience in web development and
                    machine learning.
                </p>
                <div className="flex justify-center py-8">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="My Profile Picture"
                        className="rounded-full"
                    />
                </div>
            </section>

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