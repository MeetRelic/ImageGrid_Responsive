import { textAlign } from '@material-ui/system';
import React from 'react'
import './App.css';
import Grid from './Grid'
/*
Author this Project - Meet Gandhi
*/
function App() {
  return (
   <div>
         <h1 style = { {textAlign: 'center'} }>Image Grid </h1>
         <Grid />
   </div>
  );
}

export default App;
