import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className="footer">
        <div className="box">
            <div className="left">
                <div className="categories">
                    <p>Categories</p>
                    <div>
                        <p>Sports</p>
                    </div>
                    <div>
                        <p>Politics</p>
                    </div>
                    <div>
                        <p>Business</p>
                    </div>
                </div>
                <div className="contactUs">
                    <div className="contact">
                        <p>Contact Us</p>
                        <div>Phone No. - <span>9876543210</span></div>
                        <div>Email - <span>dduaarauf@gmail.com</span></div>
                        <div>Address - <span>karachi, Pakistan</span></div>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="newsletter">
                    <p>Subscribe to Our Newsletter</p>
                    <div className="email">
                        <input type="email" placeholder="Enter Your Email Here"/>
                        <button>Subscribe</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Footer
