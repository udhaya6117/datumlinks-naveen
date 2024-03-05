import React from 'react'
import work1 from "../../img/our_works/Mask group.png";
import work2 from "../../img/our_works/Mask group (1).png";
import work3 from "../../img/our_works/Mask group (2).png";
import work4 from "../../img/our_works/Mask group (3).png";
import work5 from "../../img/our_works/Mask group (4).png";
import work6 from "../../img/our_works/Mask group (5).png";
import { Container } from '@mui/material';
import serviceicon from "../../img/Aboutuspage-img/staricon.png"
import { useNavigate } from "react-router-dom";
import { Routingdata } from "../Routingdata";


const Workpage = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className="Our_Works">
        <Container>
          <text className="text-ourservices">Our Works</text>
          
          <div className='header-titile-services-page'>
              <h1>Crafted with <text>our bear hands</text><img src={serviceicon} alt='' /></h1>
              <div></div>
           </div>

          <div className="divide-imges-ourwork">
            <div className="work-content" >
              <div className="img-div-work" onClick={()=>{
                 navigate(Routingdata.WORKDETAILSPAGE)
              }}>
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
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Workpage