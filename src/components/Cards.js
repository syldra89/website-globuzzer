import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
  return(
    <div className="cards">
      <h1>Our Courses</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="/images/img-1.jpg"
            text="Python for begginers: Become a programming master"
            label="Intermediate"
            path="/courses"
            />
            <CardItem
            src="/images/img-2.jpg"
            text="Algebra: Algebra from basic to advanced"
            label="All Levels"
            path="/courses"
            />
            <CardItem
            src="/images/img-3.jpg"
            text="Business fundamentals: Corporate strategy"
            label="Begginers"
            path="/courses"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src="/images/img-4.jpg"
            text="Web design for begginers: Learn to code in HTML and CSS"
            label="Begginer"
            path="/courses"
            />
            <CardItem
            src="/images/img-5.jpg"
            text="Fitness trainer: Gym workouts and bodybuilding"
            label="All levels"
            path="/courses"
            />
            <CardItem
            src="/images/img-6.jpg"
            text="Photography masterclass: A complete guide of photography"
            label="All levels"
            path="/courses"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
