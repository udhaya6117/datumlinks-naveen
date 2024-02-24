import React from "react";
import "../../components/navigations/Childcomponents.css";
import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import mainimg from "../../img/hemopage-imgs/Mask group.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import dotparagrarf from "../../img/hemopage-imgs/Frame 29.png";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import product2 from "../../img/hemopage-imgs/product-2.png";
import product3 from "../../img/hemopage-imgs/product-3.png";
import client from "../../img/hemopage-imgs/client-img.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Imagesforpartners } from "./Imagesforpartners";
import work1 from "../../img/our_works/Mask group.png";
import work2 from "../../img/our_works/Mask group (1).png";
import work3 from "../../img/our_works/Mask group (2).png";
import work4 from "../../img/our_works/Mask group (3).png";
import work5 from "../../img/our_works/Mask group (4).png";
import work6 from "../../img/our_works/Mask group (5).png";
import stack from "../../img/Group 101.png";
import news1 from "../../img/new-box/new1.png";
import news2 from "../../img/new-box/news2.png";
import news3 from "../../img/new-box/news3.png";
import logo from "../../img/logo.png";
import dot from "../../img/Ellipse 5.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Divider from "@mui/material/Divider";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  padding: "10px",
  borderRadius: "5px", // Adjust the value as needed
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Homepage = () => {
  const [expanded, setExpanded] = React.useState("panel2");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container>
        <div className="hero-contect">
          <div className="brands-crafting">
            <div className="positionfortitleheader">
              <text style={{ display: "block" }}>Crafting Brands</text>
              <text style={{ display: "block" }}>and digital experienes</text>
            </div>
          </div>
          <div className="paragaraf-detatils">
            <div className="positionfortitleheader">
              <p>
                We are an unusual digital agency focusing on transforming your
                vision into a captivation digital experience
              </p>
            </div>
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

          <div className="services-homes">
            <div className="products-homes">
              <text>01</text>
              <h1>Brand Strategy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
            </div>
            <div className="products-homes-detatils">
              <div className="products-imgs">
                <img src={mainimg} alt="img" />
              </div>
              <div className="accordion">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Creative Logo Design
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Marketing Collateral{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Graphic Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Social Media Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="services-homes">
            <div className="products-homes">
              <text>02</text>
              <h1>Web Design & Development </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
            </div>
            <div className="products-homes-detatils">
              <div className="products-imgs">
                <img src={product2} alt="img" />
              </div>
              <div className="accordion">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Creative Logo Design
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Marketing Collateral{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Graphic Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Social Media Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="services-homes">
            <div className="products-homes">
              <text>03</text>
              <h1>Digital Marketing </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
            </div>
            <div className="products-homes-detatils">
              <div className="products-imgs">
                <img src={product3} alt="img" />
              </div>
              <div className="accordion">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Creative Logo Design
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Marketing Collateral{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Graphic Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography className="header-for-AccordionSummary">
                      Social Media Design{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
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

      <div className="Our_Works">
        <Container>
          <text className="text-ourservices">Our Works</text>

          <div className="our_work_header">
            <h1>Crafted with our bear hands</h1>
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
            <div className="work-content">
              <div className="img-div-work">
                <img src={work3} alt="" />
              </div>
              <div className="title-our-work">
                <h3>Creators Club</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="img-div-work">
                <img src={work4} alt="" />
              </div>
              <div className="title-our-work">
                <h3>Bell and collar</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="img-div-work">
                <img src={work5} alt="" />
              </div>
              <div className="title-our-work">
                <h3>The VP Pass</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="img-div-work">
                <img src={work6} alt="" />
              </div>
              <div className="title-our-work">
                <h3>SOL Estate</h3>
                <div>
                  <text>Social Media</text> <text>Branding</text>{" "}
                  <text>Web Design</text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="header-stack">
        <div className="title-client">
          <h2>Our Tech stacks</h2>
        </div>
        <Container>
          <div className="stack-block">
            <img src={stack} alt="" />
          </div>
        </Container>
      </div>

      <div className="news-div">
        <Container>
          <div className="splite_news">
            <text className="text-ourservices-2">Recent News</text>
            <aside>View all article</aside>
          </div>
          <div className="news-content">
            <div className="new-box">
              <div className="img-news-box">
                <img src={news1} alt="" />
              </div>
              <div className="details-for-news">
                Our Clients Delphina raises $7.5 in seeds funding
              </div>
              <p>Customer stories</p>
            </div>
            <div className="new-box">
              <div className="img-news-box">
                <img src={news2} alt="" />
              </div>
              <div className="details-for-news">
                Our Clients Delphina raises $7.5 in seeds funding
              </div>
              <p>Presentation tips</p>
            </div>
            <div className="new-box">
              <div className="img-news-box">
                <img src={news3} alt="" />
              </div>
              <div className="details-for-news">
                Our Clients Delphina raises $7.5 in seeds funding
              </div>
              <p>Presentation design</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
