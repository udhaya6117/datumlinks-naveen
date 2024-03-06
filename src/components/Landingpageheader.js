import React from "react";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routingdata } from "./Routingdata";

const Landingpageheader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currenturl = location.pathname;
  console.log("currenturl",currenturl)

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <div className="header-split">
          <Typography variant="h6" component="div" className="logo">
            <img src={logo2} alt="logo" />
          </Typography>
          <div className="header-navigations">
            <div className={currenturl === Routingdata.LANDINGPAGEHOME ? "active-div" : "inactive-div"}>
              <text 
                onClick={() => {
                  navigate(Routingdata.LANDINGPAGEHOME);
                }}
              >
                Home
              </text>
            </div>
            <div className={currenturl === Routingdata.ABOUTUSPAGE ? "active-div" : "inactive-div"}>
              <text
                onClick={() => {
                  navigate(Routingdata.ABOUTUSPAGE);
                }}
              >
                About
              </text>
            </div>
            <div className={currenturl === Routingdata.SERVICESPAGE ? "active-div" : "inactive-div"}>
              <text
                onClick={() => {
                  navigate(Routingdata.SERVICESPAGE);
                }}
              >
                Services
              </text>
            </div>
            <div className={currenturl === Routingdata.WORKPAGE || currenturl === Routingdata.WORKDETAILSPAGE ? "active-div" : "inactive-div"}>
              <text
                onClick={() => {
                  navigate(Routingdata.WORKPAGE);
                }}
              >
                Work
              </text>
            </div>
            <div className={currenturl === Routingdata.CONTACTUSPAGE ? "active-div" : "inactive-div"}>
              <text
                onClick={() => {
                  navigate(Routingdata.CONTACTUSPAGE);
                }}
              >
                Contact
              </text>
            </div>
            <div className={currenturl === Routingdata.RESOURCES ? "active-div" : "inactive-div"}>
              <text
                onClick={() => {
                  navigate(Routingdata.RESOURCES);
                }}
              >
                Resources
              </text>
            </div>
          </div>
          <div className="btn-for-quote">
            <button>Get a quote</button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Landingpageheader;
