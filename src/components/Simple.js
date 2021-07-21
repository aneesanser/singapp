import React from "react";
import "./Simple.css";

function Simple(props) {
  return (
    <div className="forum">
      <div class="wrapper">
        <div class="check">
          <h1 id="head">Get a Free Consulatation</h1>
          <span id="ch">Iam a</span>
          <input id="ch" type="checkbox"></input>
          <span id="ch">buyer and seller</span>
          <input id="ch" type="checkbox"></input>
          <span id="ch">seller</span>
          <input id="ch" type="checkbox"></input>
          <span id="ch">buyer</span>
          <input id="ch" type="checkbox"></input>
          <span id="ch">renter</span>
        </div>

        <div class="get">
          <div class="input1">
            <input type="text" class="input"></input>
            <label id="na">name</label>
          </div>
          <div class="input2">
            <input type="text" class="input"></input>
            <label id="gm">gmail</label>
          </div>
          <div class="input3">
            <input type="text" class="input"></input>
            <label id="buyer">Type of Buyer/Seller</label>
            <input type="text" class="input"></input>
            <label id="pho">Phone</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simple;
