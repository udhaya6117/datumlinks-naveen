import React from "react";
import Landingpageheader from "./Landingpageheader";
import { Outlet } from "react-router-dom";
import "../components/Landingpage.css";
import { Container, Divider } from "@mui/material";
import logo from "../img/logo.png";
import dot from "../img/Ellipse 5.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Landingpage = () => {
  return (
    <div>
      <div>
        <Landingpageheader />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <div id="footer" className="footer">
          <Container>
            <div className="logo-footer">
              <img src={logo} alt="" />
            </div>
            <div className="project-text">
              <li>
                <img src={dot} alt="" />
                Your idea deserves better
              </li>
              <h1>
                Let's start a project{" "}
                <ArrowOutwardIcon
                  className="icon-project"
                  sx={{ fontSize: 80 }}
                />
              </h1>
            </div>

            <div className="contantsus-details">
              <Divider />
              <div className="contantus-content">
                <div>
                  <label>Reach Us</label>
                  <text>+1 (705) 996-4899</text>
                  <text>+91 9754836466</text>
                </div>
                <div>
                  <label>Start a coversation</label>
                  <text>Work@Outline2design.com</text>
                </div>
                <div>
                  <label>2024 Datum link inc, All rights reserved.</label>
                  <text>Privacy Policy</text>
                </div>
                <div>
                  <label>Social</label>
                  <text>Facebook</text>
                  <text>Instagram</text>
                  <text>X</text>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="resposiveview">
        <div className="dailog-box">
          <div className="dailog-content">
            No mobile view, only accessible in desktop mode currently.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
