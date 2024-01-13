import React from "react";
import "../../components/navigations/Childcomponents.css";
import { Container } from "@mui/material";
import mainimg from "../../img/hemopage-imgs/Mask group.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import dotparagrarf from "../../img/hemopage-imgs/Frame 29.png";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#F8F8F8",
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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
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
                    <Typography className="header-for-AccordionSummary">Marketing Collateral </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
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
                    <Typography className="header-for-AccordionSummary">Graphic Design </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
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
                    <Typography className="header-for-AccordionSummary">Social Media Design </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="details-for-AccordionSummary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
