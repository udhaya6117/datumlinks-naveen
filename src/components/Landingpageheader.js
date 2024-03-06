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
            <div>
              <text
                onClick={() => {
                  navigate(Routingdata.LANDINGPAGEHOME);
                }}
              >
                Home
              </text>
            </div>
            <div>
              <text
                onClick={() => {
                  navigate(Routingdata.ABOUTUSPAGE);
                }}
              >
                About
              </text>
            </div>
            <div>
              <text
                onClick={() => {
                  navigate(Routingdata.SERVICESPAGE);
                }}
              >
                Services
              </text>
            </div>
            <div>
              <text
                onClick={() => {
                  navigate(Routingdata.WORKPAGE);
                }}
              >
                Work
              </text>
            </div>
            <div>
              <text
                onClick={() => {
                  navigate(Routingdata.CONTACTUSPAGE);
                }}
              >
                Contact
              </text>
            </div>
            <div>
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
