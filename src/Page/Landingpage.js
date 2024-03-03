import React from "react";
import "./Landingpage.css";
import logo from "../imges/42andmorelogo.png";
import From from "./From";
import { App } from "../components/Box";
import { ToptagApps } from "../components/Toptag";
import Tag2 from "../components/Tag2";
import BottomTag from "../components/BottomTag.js";
import FooterTag from "../components/FooterTag.js";
import Animater from "../components/Animater.js";
import Tag3 from "../components/Tag3.js";

function Landingpage() {
  return (
    <div className="full_body">
      {/* <img src={logo}  /> */}
      <div className="backbox">
        <div
          className="formal1"
        >
          <div>
            <div
              className="logos"
            >
              <img
                src={logo}
                style={{ height: "50px", width: "50px", paddingLeft: "20px",paddingTop:"30px" }}
              />
              <p
                style={{
                  display: "flex",
                  columnGap: "1px",
                  paddingTop: "10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    color: "rgb(255 255 255)",
                  }}
                >
                  42
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    color: "rgb(255 255 255)",
                  }}
                >
                  and
                </p>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    color: "rgb(255 255 255)",
                  }}
                >
                  more
                </p>
              </p>
            </div>
            <h1
              style={{
                fontFamily: "Degular",
                fontSize: "50px",
                padding: "40px",
                color: "white",
              }}
            >
              Supercharge your revenue using <br></br>
              <span style={{ display: "flex", flexDirection: "row" }}>
                technology-
                <span style={{ color: "rgba(249, 186, 72, 1)" }}>
                  driven CRM
                </span>
              </span>
            </h1>
            <div>
              <App />
            </div>
          </div>
          <div>
            <From />
          </div>
        </div>
      </div>
            
      <div>
        <ToptagApps />
      </div>
      <div>
        <Tag3 />
      </div>
      <div className="mainstag2">
        <Tag2 />
      </div>
      <div>
        <Animater />
      </div>
      <div>
        <BottomTag />
      </div>
      <div>
        <FooterTag />
      </div>
<div>
<div
    style={{
      
      backgroundColor: "black",
      color: "white",
      width:"100%",
      height:"6vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
        <p >© 2023 All Rights Reserved</p>

  </div>
</div>
    </div>
  );
}

export default Landingpage;
