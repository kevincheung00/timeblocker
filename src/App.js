import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeText from './components/FadeText.js';

import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="main">
        <h1>Time Block<br />Your Life</h1>
        <br></br>
        <FadeText
            title="What Is Time Blocking?"
            content="
            Why put tasks in a to-do list and forget to do them, when you can schedule them automatically in your calendar?
            "
            image="peopleworking.png"
        />
    </div>
  );
}

export default App;
