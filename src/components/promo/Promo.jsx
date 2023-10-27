import React from "react";
import "./promo.css";
import promoImg from "../../assets/promo.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo_title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo_desc">Live for Influential and Innovative fashion!</div>
            <div className="promo_btn-wrapper">
              <button className="promo__btn">Shop Now</button>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
