import React, { Component } from 'react';
import ReactDom from 'react-dom';

import App from './components/App'
import './assets/css/base.css'

import {BrowserRouter} from 'react-router-dom'



ReactDom.render(
  <BrowserRouter><App/></BrowserRouter>
  
  ,
  document.querySelector('#root')
);