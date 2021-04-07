import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Notifications } from './component/notifications';
import { RatingBar } from './component/rating-bar';



function App() {

  return (
    <div className="container row">
      <div >
    <RatingBar></RatingBar>
    </div>

      <div >
      <Notifications></Notifications>
      </div>

    </div>




  );
}

export default App;
