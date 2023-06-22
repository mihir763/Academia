import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/place/Rajkot,+Gujarat/@22.273625,70.7388936,12z/data=!3m1!4b1!4m6!3m5!1s0x3959c98ac71cdf0f:0x76dd15cfbe93ad3b!8m2!3d22.3038945!4d70.8021599!16zL20vMDNnbWxx?entry=ttu" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Rajkot.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> mihirjoshi8585@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 81608 58550</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
