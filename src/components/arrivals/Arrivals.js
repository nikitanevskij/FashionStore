import React from "react";
import "./arrivals.css";
import { Card } from "../card/Card";

export const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};
