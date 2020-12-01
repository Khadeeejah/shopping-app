import React from 'react'

function Footer() {
     return (
          <footer className='container footer-body' >
          <div className='left'>
            <h1>YOUR LOGO</h1>
            <p>
              We earned a reputation of being good at what we do.
              Let us take your online shop to new dimension in
              success!
            </p>
            <p>Comilla, Bangladesh 3500</p>
            <a href='!#' id='email'>kawsarahmed0210@gmail.com</a>
            <p>01647470457</p>
            <span>
             <i class="fab fa-facebook"></i>
             <i class="fab fa-instagram"></i>
             <i class="fab fa-twitter"></i>
             <i class="fab fa-linkedin-in"></i>
            </span>
          </div>
          <div className='right'>
            <h1>RECEIVE EMAIL UPDATES</h1>            
            <input type='email' placeholder='Your Email Address' />
            <div className= 'more-info'>
                <div>
                  <h3>Shop</h3>
                  <p>Shop</p>
                  <p>Collection</p>
                  <p>Outlet</p>
                  <p>Lookbook</p>
                </div>
                <div>
                  <h3>Help</h3>
                  <p>FAQ</p>
                  <p>Privacy Policy</p>
                  <p>Terms and Conditions</p>
                  <p>Returns and Exchanges</p>
                </div>
                <div>
                  <h3>About</h3>
                  <p> Journal</p>
                  <p>Our Story</p>
                  <p>Contact</p>
                  <p>Store Location</p>
                </div>
            </div>
          </div>
        </footer>
        

      


     )
}

export default Footer
