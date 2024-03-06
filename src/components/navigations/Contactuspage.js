import React from 'react'
import contactimg from "../../img/Contactus-img/contactus-img-1.png"

const Contactuspage = () => {
  return (
    <div>
      <div id='contantuspage-block' className='contantuspage-block'>
         <div className='contantuspage-img'><img src={contactimg} alt='' /></div>
         <div className='contect-img-contactus'>
           <div className='part-1-contactus'>
            <div style={{flex:"1"}}>
            <div className='titile-contactuspage'>
            <h1>Let's</h1>
            <h1>Connect</h1>
            </div>
            <p>We've got tons of cool ideas that make awesome brands stand out.</p>
            </div>
            <div className='emailandphone-contantus'>
              <h3>Email Address</h3>
              <text>hello@datumlinks.com</text>
            </div>
            <div className='emailandphone-contantus'>
              <h3>Phone</h3>
              <text>+91 772 086 200</text>
            </div>
           </div>
           <div className='inputs-content'>
            <div className='sizeof-contact-number'>
               <input type='text' placeholder='Name' />
               <input type='text' placeholder='Email ID' />
               <textarea placeholder='Whats on your mind' cols="50" rows="4" ></textarea>
               <text className="text-ourservices" style={{    width: "55px",
    padding: "0px 18px"}}>Submit</text>
           </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Contactuspage