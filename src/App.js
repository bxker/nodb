import React from 'react';

//css
import './reset.css';
import './App.css';

//component imports
import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Parts from './components/Parts/Parts';


export default function App() {
  return (
    <div>
      <Header />
      <Add />
      <Parts />
    </div>
  );
}

