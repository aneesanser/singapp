import React from "react";
import fbs from "../imgs/sing1";
import fhh from "../imgs/vbb";
import sss from "../imgs/log";
import Simple from "./Simple";
import Card1 from "./Card1";
import Form1 from "./Form1";

function Home() {
  return (
    <div class="contain">
      <div class="image">
        <nav>
          <div class="container-fluid navbar  ">
            <div class="navbar-header">
              <img id="photo" src={sss} alt="Logo"></img>
            </div>
            <ul class="nav navbar-nav navbar-right ">
              <li style={{ left: "-220px" }}>
                <a href="#">Featured listings</a>
              </li>
              <li style={{ left: "-220px" }}>
                <a href="#">Find property</a>
              </li>
              <li style={{ left: "-220px" }}>
                <a href="#">Find commercial</a>
              </li>
              <li style={{ left: "-220px" }}>
                <a href="#">pre-Construction</a>
              </li>
              <li style={{ left: "-220px" }}>
                <a href="#">Contactme</a>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          <h1 id="name">JP Singh Masun</h1>
          <div>
            <h1 id="phoneno">(905) 497-5583</h1>

            <h1 id="gmail">jpsinghmasun@gmail.com</h1>
          </div>
        </section>
        <div class="alignment">
          <section>
            <img id="person" src={fbs} alt="sing"></img>
          </section>

          <section>
            <Simple />
          </section>
          <section>
            <Card1 />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
