import React from "react";
import "./card.css";
import img1 from "../../assets/01.jpg";
import arrow from "../../assets/Arrow.svg";

export const Card = () => {
  return (
    <div className="card">
      <a href="#1" className="card__link">
        {" "}
      </a>
      <img src={img1} alt="description..." className="card__img" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">Hoodies & Sweetshirt</div>
          <div className="card__mute">Explore Now!</div>
        </div>
        <div className="card__icon">
          <img src={arrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  );
};
