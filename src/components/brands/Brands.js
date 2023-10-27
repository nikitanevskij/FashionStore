import React from "react";
import "./brands.css";
import HM from "../../assets/HM.png";
import OBEY from "../../assets/Obey.png";
import SH from "../../assets/Shopify.png";
import LACOSTE from "../../assets/Lacoste.png";
import LV from "../../assets/Levis.png";
import AMAZON from "../../assets/Amazon.png";

export const Brands = () => {
  const brands = [
    { name: "HM", img: HM },
    { name: "OBEY", img: OBEY },
    { name: "SH", img: SH },
    { name: "LACOSTE", img: LACOSTE },
    { name: "LV", img: LV },
    { name: "AMAZON", img: AMAZON },
  ];
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          {brands.map((items, index) => (
            <li key={index}>
              <a href="#!" className="">
                <img src={items.img} alt={items.name} className="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
