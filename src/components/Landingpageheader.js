import React from "react";
import logo from "../img/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Landingpageheader = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <div className="header-split">
          <Typography variant="h6" component="div" className="logo">
            <img src={logo} alt="logo" />
          </Typography>
          <div className="header-navigations">
            <div>
              <text>Home</text>
            </div>
            <div>
              <text>About</text>
            </div>
            <div>
              <text>Services</text>
            </div>
            <div>
              <text>Work</text>
            </div>
            <div>
              <text>Contact</text>
            </div>
            <div>
              <text>Resources</text>
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
