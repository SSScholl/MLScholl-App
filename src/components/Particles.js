import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";
//import hexagonOptions from './particle-options/hexagon.json';
import testOptions from './particle-options/test.json';
import { hexagonOptions } from './particles-options';


import(`./particles-options/${selectedFile}`)
.then(options => {
  <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
});


// Import Custom CSS
import "../App.css";

const ParticlesPage = () => {

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [optionFileLocation] = '';
  const options = require(`./particles-options/${selectedFile}`);


  const fileList = [
    './particle-options/test.json',
    './particle-options/hexagon.json',
    './particle-options/starry.json'
  ];

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.value);
  }

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
    <div className="App">
      <button 
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        Open Overlay
      </button>
      {showOverlay && (
        <div className="overlay fixed top-0 left-0 w-1/5 h-screen h-1/4 h-screen bg-gray-900 p-8">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-indigo-500">Select a File</h2>
              <button
                className="text-indigo-500 font-medium focus:outline-none"
                onClick={() => setShowOverlay(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="my-4">
              <select className="block w-full border rounded p-2" onChange={handleFileSelect}>
                {fileList.map((file, index) => (
                  <option key={index} value={file}>{file}</option>
                ))}
              </select>
            </div>
            <button 
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full w-full"
              onClick={() => setShowOverlay(false)}
            >
              Close
            </button>
            {selectedFile && <p className="text-indigo-500">Selected file: {selectedFile}</p>}
          </div>
        </div>
      )}
      <Particles id="tsparticles" options={require(`./particles-options/${selectedFile}`)} init={particlesInit} loaded={particlesLoaded} />
    </div>
  );
};

export default ParticlesPage;