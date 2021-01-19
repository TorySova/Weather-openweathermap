import React from 'react';
import './App.css';
import { Weather } from './components/Weather';

const App = () => {
  const data = new Date().toLocaleTimeString()
  return (
    <div className="App">      
      {
         data < '18'
          ? <div className='day'>
            <Weather /></div>
          : <div className='night'><Weather /></div>
      }
    </div>
  );
}

export default App;
