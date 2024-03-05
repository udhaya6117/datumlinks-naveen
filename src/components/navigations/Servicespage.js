import React from 'react'
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import mainimg from "../../img/hemopage-imgs/Mask group.png";
import product2 from "../../img/hemopage-imgs/product-2.png";
import product3 from "../../img/hemopage-imgs/product-3.png";
import serviceicon from "../../img/Aboutuspage-img/staricon.png"


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







const Servicespage = () => {
  const [expanded, setExpanded] = React.useState("panel2");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
       <div className="over-services">
        <Container>
          <text className="text-ourservices">Our Services</text>
           <div className='header-titile-services-page'>
              <h1>Crafted with <text>our bear hands</text><img src={serviceicon} alt='' /></h1>
              <div></div>
           </div>
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
    </div>
  )
}

export default Servicespage