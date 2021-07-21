import React from "react";
import ccc from "../imgs/Image 8.png";
import "./Section.css";

function Section(props) {
  return (
    <div class="say">
      <div class="bc">
        <h5 class="tes">Testimonials</h5>
        <h1 class="cli">What Our Clients Have to Say</h1>
        <div class="right">
          <p id="con">
            I greatly appreciate the communication on the process, what we
            needed to do in terms of providing samples, what to expect. Novalab
            provided what we needed in terms of certification that we can use
            with our customers.
          </p>
          <h1 class="morgan">Morgan Macloed</h1>
          <h1 class="morga">MEDICMETRICA</h1>
        </div>
        <div class="left">
          <img src={ccc} alt="home"></img>
        </div>
      </div>
    </div>
  );
}

export default Section;
