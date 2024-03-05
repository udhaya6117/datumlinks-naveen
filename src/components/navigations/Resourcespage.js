import { Container } from "@mui/material";
import React from "react";
import serviceicon from "../../img/Aboutuspage-img/text-img.png";
import side_img from "../../img/Resources-img/side-img.png";
import group_img from "../../img/Resources-img/Group-img.png";
import youtube from "../../img/Resources-img/youtubeicon.png";

const Resourcespage = () => {
  return (
    <div>
      <div style={{ marginTop: "45px" }}>
        <Container>
          <text className="text-ourservices">Resources</text>
          <div className="header-titile-services-page">
            <h1 style={{ marginTop: "30px" }}>
              Crafted with <text>our bear hands</text>
              <img src={serviceicon} alt="" />
            </h1>
            <div></div>
          </div>
        </Container>
      </div>
      <div className="Resourcespage-sideimg-block">
        <Container>
          <div className="splited-Resourcespage-sideimg-block">
            <div className="img-side-Resourcespage">
              <img src={side_img} alt="" />
            </div>
            <div className="content-Resourcespage">
              <h1>Blog Maintenance</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="img-group-Resourcespage">
                <img src={group_img} alt="" />
              </div>
              <text className="text-ourservices">Hire now</text>
            </div>
          </div>
        </Container>
      </div>
      <div className="Resourcespage-sideimg-block">
        <Container>
          <div className="splited-Resourcespage-sideimg-block">
            <div className="content-Resourcespage">
              <h1>SEO Tool analyst</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="img-group-Resourcespage">
                <img src={group_img} alt="" />
              </div>
              <text className="text-ourservices">Hire now</text>
            </div>
            <div className="img-side-Resourcespage">
              <img src={side_img} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="Resourcespage-sideimg-block">
        <Container>
          <div className="splited-Resourcespage-sideimg-block">
            <div className="img-side-Resourcespage">
              <img src={side_img} alt="" />
            </div>
            <div className="content-Resourcespage">
              <h1>Youtube Tool</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="img-group-Resourcespage" style={{ width: "20%" }}>
                <img src={youtube} alt="" />
              </div>
              <text className="text-ourservices">Hire now</text>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resourcespage;
