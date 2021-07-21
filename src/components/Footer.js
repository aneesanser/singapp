import React from "react";
import "./Footer.css";
import nnn from "../imgs/foot.png";

function Footer(props) {
  return (
    <div>
      <footer>
        <div class="row1">
          <div class="col1">
            <img src={nnn} class="logo1" alt="lo"></img>
            <h4 id="mo">MORTGAGE</h4>
            <h5 id="mon">CALCULATOR</h5>
          </div>
          <div class="col2">
            <p id="pi">2980 Drew Rd Unit 231, Mississauga, Ontario, L4T 0A7</p>
            <p id="pi">(905) 497-5583</p>
            <p id="pi">JPsinghmasaun@gmail.com</p>
          </div>
          <div class="col3">
            <form>
              <h3 id="lo">Sign Up for Email Updates</h3>
              <input class="finput" type="text" required></input>
              <label class="fi">your email</label>

              <button id="btn" type="submit">
                Sign Up
                <i
                  class="fas fa-arrow-right"
                  data-fa-transform="shrink-8 right-6"
                ></i>
              </button>
            </form>
          </div>
        </div>
        <div class="row2">
          <p id="er">
            {" "}
            Copyright © 2020 Toprealtorsteam.com. All rights reserved
          </p>
          <p id="es">Designed and Developed by Maple Tech Space</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
