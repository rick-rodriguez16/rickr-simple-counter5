import React from 'react'
//import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;

const domNode = document.getElementById('root');
const root = createRoot(domNode);

setInterval(function() {
  root.render(<Home counter={counter} />);
  counter++;
}, 1000);
