import React from "react";
import "../../components/navigations/Childcomponents.css";
import { Container } from "@mui/material";
import mainimg from "../../img/hemopage-imgs/Mask group.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import dotparagrarf from "../../img/hemopage-imgs/Frame 29.png";

const Homepage = () => {
  return (
    <div>
      <Container>
        <div className="hero-contect">
          <div className="brands-crafting">
            <text style={{ display: "block" }}>Crafting Brands</text>
            <text style={{ display: "block" }}>and digital experienes</text>
          </div>
          <div className="paragaraf-detatils">
            We are an unusual digital agency focusing on transforming your
            vision into a captivation digital experience
          </div>
        </div>
      </Container>
      <div id="mainimg" className="main-img">
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <div className="main-img-box">
            <img src={mainimg} alt="img" />
            <div className="icon-play">
              <IconButton className="icon-btn">
                <PlayArrowIcon sx={{ fontSize: 50 }} className="play" />
              </IconButton>
            </div>
          </div>
        </Container>
      </div>
      
      <Container>
        <div className="team-content">
          <p>
            We are a dynamic team, passionate about ideas into digital
            realities.
            <img className="dotimg" src={dotparagrarf} alt="dot-img" />{" "}
          </p>
        </div>
      </Container>

      <div className="over-services">
        <Container>
          <text className="text-ourservices">Our Services</text>
        </Container>
      </div>

    </div>
  );
};

export default Homepage;
