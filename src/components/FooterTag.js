import React from "react";
import "../Page/Landingpage.css";
import star_2 from "../imges/star_2.png";
import spring2 from "../imges/spring2.png";
import spring from "../imges/spring.png";
import line from "../imges/line.png";

const FooterTag = () => {
  return (
    <div
      style={{
        backgroundColor: "#d82a69",
        color: "black",
        // height: "18vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
  <div class="footer_content">
    <img className="springImg2" src={spring2} />
    <img className="springImg" src={spring} />
    <img className="lineImg" src={line} />
    <img className="star_2Img" src={star_2} />
    <div class="footer_text">
        Join hands with 42CRM and embark on a <br/>journey where technology meets vision
    </div>
    <button class="signup_button" type="submit">Signup</button>
</div>

    </div>

  );
  
};

export default FooterTag;

