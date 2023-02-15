import React from 'react';

function ContactMe() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h1>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="grid-password">
                  Email
                </label>
                <input className="appearance-none block w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-password" type="email" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea className="appearance-none block w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-message" rows="4" placeholder="Type your message here"></textarea>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;