import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import AppClass from "./AppClass.jsx";
import { imageData } from './components/DataComponents.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App prop1="abcd" imageData={imageData}/>    */}
    <AppClass imageData={imageData}/>
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);