import React from "react";
import abimg from "../../images/highlights/our-founder-highlight.png";
import abimg1 from "../../images/highlights/scholarship-fund-highlight.png";
import abimg2 from "../../images/fbm.jpeg";

import "./Highlight.css";

const index = () => {
  return (
    <div className = "highlight-container">
      <div className="container w-full row-highlight">
        <div className="row">
          <div className="row-item-media">
            <img src={abimg} alt="" />
          </div>
          <div className="row-item">
            <img src={abimg} alt="" />
            {/* <h2>Our Founders Story </h2> */}
            <p>A pioneer of her generation with educational opportunity,Mrs. Florence Bamidele Makanjuola nee Familusi (1921 - 2021) 
                created the Opekete Foundation was the brainchild of Florence, created as a platform to formalize her lifelong support for the education of indigent girls in Imesi-Ile and her other
              female empowerment and philanthropic activities.
            </p>
            <a href="/founderinfo" style={{ color: "#f0628a" }}>
              {" "}
              <p><span style={{textDecoration:"underline"}}>Read about our founder </span>{" "}</p>
              
            </a>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src={abimg2} alt="" />
            {/* <h2>FBM Roundtable </h2> */}
            <p>
            Bieannal Round table to raise awareness and stimulate public discourse about the state of female education 
            </p>
            <a href="/event-details" style={{ color: "#f0628a" }}>
              {" "}
              <p><span style={{textDecoration:"underline"}}>Learn more about this event.</span>{" "}</p>
            </a>
          </div>
          <div className="row-item-media">
            <img src={abimg2} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="row-item-media">
            <img src={abimg1} alt="" />
          </div>
          <div className="row-item">
            <img src={abimg1} alt="" />
            {/* <h2>Florence Fund</h2> */}
            <p>
              The Florence Fund Scholarship, an initiative of the foundation to
              provide scholarships for promising indigent girls across Nigeria
              studying in the fields of teaching (STEM) and nursing
            </p>

            <a href="/apply" style={{ color: "#f0628a" }}>
              {" "}
              <p><span style={{textDecoration:"underline"}}>Learn more about scholarships</span>{" "}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;