import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import ClassComp from './components/ClassComp';
import FunComp from './components/FunComp';

function App() {
  return (
    <Fragment>
    <ClassComp />
    <FunComp />
    </Fragment>
  );
}

export default App;
