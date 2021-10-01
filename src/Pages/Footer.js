import React from 'react'
import "./Common.css"
function Footer() {
    return (
        <footer className="footer-area">
        <div className="container">
            <div className="">
                <div className="site-logo text-center py-4">
                   <img src="./images/followme.png" alt="logo"/>
                </div>
                <div className="social text-center">
                    <h5 className="text-uppercase">Follow me</h5>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
                <div className="copyrights text-center">
                    <p className="para">
                        Porfolio <br></br>
                        <a href="#"> <span></span>Abhishek Sawant</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
