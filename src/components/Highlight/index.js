import React from "react";
import abimg from "../../images/founderinfo1.jpeg";
import abimg1 from "../../images/scholarship.jpeg";
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
            <h2>Our Founders Story </h2>
            <p>
              Mrs. Florence Bamidele Makanjuola nee Familusi (1921 - 2021) was a
              teacher, nurse, great grandmother and beloved matriarch. A pioneer
              of her generation with educational opportunity, she lived a long,
              eventful, and accomplished life, passing away just shy of her
              100th birthday. The Opekete Foundation was the brainchild of
              Florence, created as a platform to formalize her lifelong support
              for the education of indigent girls in Imesi-Ile and her other
              female empowerment and philanthropic activities.
            </p>
            <a href="/founderinfo" style={{ color: "#f0628a" }}>
              {" "}
              <span>Learn more</span>{" "}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src={abimg2} alt="" />
            <h2>FBM Roundtable </h2>
            <p>
              The Inaugural Biennial FBM Round table on Promoting Female
              Education : Fixing Girl Child Education
            </p>
            <a href="/event-details" style={{ color: "#f0628a" }}>
              {" "}
              <span>Learn more</span>{" "}
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
            <h2>Florence Fund</h2>
            <p>
              The Florence Fund Scholarship, an initiative of the foundation to
              provide scholarships for promising indigent girls across Nigeria
              studying in the fields of teaching (STEM) and nursing
            </p>

            <a href="/apply" style={{ color: "#f0628a" }}>
              {" "}
              <span>Learn more</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
