import { Container } from '@mui/material'
import React from 'react'
import aboutus_img from "../../img/Aboutuspage-img/main-img.png"

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
              <p style={{marginBottom:"5px"}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div id="main-img" className='aboutusmain-img'> 
         <img src={aboutus_img} alt='' />
      </div>
    </div>
  )
}

export default Aboutuspage