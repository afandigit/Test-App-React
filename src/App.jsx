import logo from './logo.svg';
import './App.css';
import React from 'react'; 


function getTitle(){
  return <h1>{process.env.REACT_APP_TITLE}</h1>
}

function getElement(title){
  return <h1>{title}</h1>
}

const  App = () => {
  return (
  <>
  {getTitle()}
  {getElement('Bienvenue au cours ODC!')}
  </>)
}

export default App;
