import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import sss from "../imgs/bedcard.png";
import "./Card.css";

function Card1(props) {
  return (
    <div>
      <section>
        <figure class="card1">
          <div class="card1_hero">
            <img class="card1_img" src={sss}></img>
          </div>
          <div class="card1_content">
            <div class="card1_info">
              <h3 id="sd">Garvis Point, Gwen Gloves</h3>
              <p id="su">W Sunnyside ave, albany park</p>
              <h4 id="sp">4 BEDROOMS | 3.1 BATHROOMS</h4>
            </div>
          </div>
        </figure>
      </section>
    </div>
  );
}

export default Card1;
