import React from 'react';

//css
import './reset.css';
import './App.css';

//component imports
import Header from './components/Header/Header';
import Add from './components/Add/Add';


export default function App() {
  return (
    <div className="app">
      <Header />
      <Add />
      
    </div>
  );
}

