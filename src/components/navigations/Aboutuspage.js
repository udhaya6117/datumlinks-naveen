import { Container } from "@mui/material";
import React from "react";
import aboutus_img from "../../img/Aboutuspage-img/main-img.png";
import sideimg from "../../img/Aboutuspage-img/side-img.png"
import statistics from "../../img/Aboutuspage-img/statitistics-img.png"
import client from "../../img/hemopage-imgs/client-img.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Imagesforpartners } from "./Imagesforpartners";

const Aboutuspage = () => {
  return (
    <div>
      <Container>
        <div className="hero-contect-abouts">
          <div className="brands-crafting">
            <div className="positionfortitleheader-2">
              <text style={{ display: "block" }}>Who are we</text>
            </div>
          </div>
          <div className="paragaraf-detatils">
            <div className="positionfortitleheader">
              <p style={{ marginBottom: "5px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div id="main-img" className="aboutusmain-img">
        <img src={aboutus_img} alt="" />
      </div>

      <div className="aside-content">
        <Container>
          <div className="aside-splited">
            <div></div>
            <div className="content-foraboutuspage">
              <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id="WhychooseUS-block" className="WhychooseUS-block">
        <div className="splites-thebox-WhychooseUS">
          <div className="img-whychooseus"><img src={sideimg} alt="" /></div>
          <div className="content-whychooseus">
              <h1>Why choose US</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <text>learn more</text>
          </div>
        </div>
      </div>
      <div id="missionandvission-block" className="missionandvission-block">
        <Container>
         <div className="splite-missionandvission-block">
         <div className="content-whychooseus">
              <h1 style={{marginTop:"0px",fontSize:"35px"}}>Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <text>learn more</text>
          </div>
          <div className="content-whychooseus">
              <h1 style={{marginTop:"0px",fontSize:"35px"}}>Vision</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <text>learn more</text>
          </div>
         </div>
         </Container>
      </div>
      <div id="Our-statistics-block" className="Our-statistics-block">
        <Container>
          <div className="splite-Our-statistics-block">
            <div><h1>Our statistics</h1></div>
            <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p></div>
          </div>
        </Container>
        <div className="img-Our-statistics-block">
                  <img src={statistics} alt="" />
          </div>
      </div>

      <div className="client-header">
        <div className="title-client">
          <h2>Our Happy Clients</h2>
          <img src={client} alt="img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore{" "}
        </p>
      </div>

      <div className="client-logos">
        <Container>
          <div className="center-clienimg-box">
            <div className="box-client">
              <ImageList
                sx={{ width: "100%" }}
                className="ImageList-gap"
                cols={5}
              >
                {Imagesforpartners.map((item) => (
                  <ImageListItem className="img-client" key={item.img}>
                    <img
                      srcSet={item.img}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </Container>
      </div>


    </div>
  );
};

export default Aboutuspage;
