import React from 'react';
import './App.css';
import NameSelector from './name-selector';
import Card from '@mui/material/Card';

function App() {

  return (
    <div className="App">
      <Card className="outerCard">
        <h1>Wheel of Misfortune</h1>
        <NameSelector />
      </Card>
      <Card className="footer">
        <p> Developed by <a href="https://github.com/d4nielcosta">Daniel Costa</a></p>
      </Card>
    </div>
  );
}

export default App;
