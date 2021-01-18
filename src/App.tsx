import React from 'react';
import './App.css';
import { Weather } from './components/Weather';

const App = () => {
  const data = new Date().toLocaleTimeString()
  return (
    <div className="App">      
      {
        data >= '9:00:00' && data <= '18:00:00'
          ? <div className='day'>
            <Weather /></div>
          : <div className='night'><Weather /></div>
      }
    </div>
  );
}

export default App;
