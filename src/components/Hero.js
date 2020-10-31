import React from 'react';
import {Button} from './Button';
import '../App.css';
import './Hero.css';

function Hero(){
  return(
    <div className="hero-container">

      <h1>ONLINE COURSES</h1>
      <p>Learn faster with our method.</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>

      </div>
    </div>
  )
}

export default Hero;
