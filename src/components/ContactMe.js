import React from 'react';

function ContactMe() {
    return (
        <div className="container mx-auto py-4 flex items-center justify-center">
            <h1 className="text-3xl font-medium">Contact Me</h1>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="grid-password">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="email" placeholder="jane@example.com"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="grid-message">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" rows="4" placeholder="Type your message here"></textarea>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactMe;