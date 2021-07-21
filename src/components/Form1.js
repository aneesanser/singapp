import React from "react";
import AdjustIcon from "@material-ui/icons/Adjust";
import RoomIcon from "@material-ui/icons/Room";

function Form1() {
  return (
    <div class="login_container">
      <div class="login_box">
        <div class="hhh">
          <h1>Whats my home worth</h1>
          <h2>
            try your address below how much below to find out how much your
            property worth
          </h2>
          <form>
            <div class="user_box">
              <span class="gf">
                <RoomIcon style={{ fontSize: 17 }} />
              </span>
              <span class="pk">
                <AdjustIcon style={{ fontSize: 17 }} />
              </span>
              <label id="type">Type your address.....</label>
              <input id="forminput1" type="text" name="" required=""></input>

              <button id="fg">show my property values </button>
            </div>
          </form>
        </div>
      </div>
      <div class="search_box">
        <h1>find your perfect property</h1>

        <form>
          <div class="search">
            <button id="fh">Search by </button>

            <input
              id="forminput"
              type="text"
              name=""
              required=""
              placeholder="type youraddress"
            ></input>

            <button id="fi">show my property values </button>
          </div>
          <button id="zx">Advanced search </button>
        </form>
      </div>
    </div>
  );
}

export default Form1;
