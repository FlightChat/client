import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery';
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
