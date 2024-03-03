import React from "react";
import "../Page/Landingpage.css";
import quotation from "../imges/quotation.png";
import arrow from "../imges/arrow.png";
import nellaiappan from "../imges/nellaiappan.png";
import nellaiappan_bg from "../imges/nellaiappan_bg.png";

const BottomTag = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "black",
        // height: "100vh",
        paddingTop:"85px",
        // width: "90%",
        overflow: "hidden",
        paddingBottom:"70px"
      }}
    >
      <div className="quotation_img">
        <img src={quotation} />
      </div>

      <div className="footer-container">
        <div className="para_footer">
          The lead management capabilities of 42CRM have been a game-changer for
          us. The system's features, from lead capture to nurturing, have
          significantly boosted our admissions pipeline. We found 42CRM to be a
          comprehensive solution that streamlines the admissions process and
          provides invaluable insights for data-driven decision-making. It's
          truly a must-have for any educational institution.
        </div>
        <div className="arrow-container">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
      <div class="nelliappanImage">
        <img
          src={nellaiappan_bg}
          class="background-image"
          alt="Background Image"
        />
        <img
          src={nellaiappan}
          class="foreground-image"
          alt="Foreground Image"
        />
        <div class="text-overlay">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Nellaiappan</p>
          <p style={{ fontSize: "14px" }}>Digital Marketing Manager</p>
          <p style={{ fontSize: "14px" }}>Sai University</p>
        </div>
      </div>
    </div>
  );
};


export default BottomTag;
