import { Container } from "@mui/material";
import React from "react";
import main_img from "../../img/work-details-img/main-img.png";
import details_2img from "../../img/work-details-img/2img.png";
import challenges1 from "../../img/work-details-img/challenges1.png";
import challenges2 from "../../img/work-details-img/challenges2.png";
import work1 from "../../img/our_works/Mask group.png";
import work2 from "../../img/our_works/Mask group (1).png";

const WorkDetails = () => {
  return (
    <div>
      <div id="workdetails-block" className="workdetails-block">
        <Container>
          <h1 className="titile-workdetails-h1">Corntoz Club</h1>
          <div className="title-our-work">
            <div>
              <text>Social Media</text> <text>Branding</text>{" "}
              <text>Web Design</text>
            </div>
          </div>
        </Container>
      </div>
      <div className="main-img-workdetails">
        <img src={main_img} alt="" />
      </div>
      <div className="content-in-para-workdetails">
        <div className="size-box">
          <text>Customer stories</text>
          <p>
            We are an unusual digital agency focusing on transforming your
            vision into a captivation digital experience to creatEe a welcoming
            platform of resources to normalise mental health conversations one
            day at a time.
          </p>
          <text
            className="text-ourservices"
            style={{ padding: "6px 30px", color: "#212121" }}
          >
            Visit live
          </text>
        </div>
      </div>

      <div className="details-2-img">
        <Container>
          <div className="splited-details">
            <div>
              <img src={details_2img} alt="" />
            </div>
            <div>
              <img src={details_2img} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="details-2-img">
        <Container>
          <div className="splited-details" style={{ padding: "30px 0px" }}>
            <div>
              <h2>Challenges</h2>
            </div>
            <div>
              <p>
                We are an unusual digital agency focusing on transforming your
                vision into a captivation digital experience to creatEe a
                welcoming platform of resources to normalise mental health
                conversations one day at a time.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="challenges-1-img">
        <img src={challenges1} alt="" />
      </div>
      <div className="challenges-1-img" style={{ marginTop: "20px" }}>
        <img src={challenges2} alt="" />
      </div>

      <div className="simalar-block">
        <Container>
            <div className="header-titile-services-page" style={{padding:"0px 20px"}}>
              <h1>
              <text>More insights</text>
              </h1>
              <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                <text className="text-ourservices" style={{padding:"0px 30px",backgroundColor:"#E4E4E4",border:"none", fontSize:"13px"}}>View all</text>
              </div>
            </div>
          <div className="divide-imges-ourwork">
            <div className="work-content">
              <div className="img-div-work">
                <img src={work1} alt="" />
              </div>
              <div className="title-our-work">
                <h3>Corntoz</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="img-div-work">
                <img src={work2} alt="" />
              </div>
              <div className="title-our-work">
                <h3>Tealive</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WorkDetails;
