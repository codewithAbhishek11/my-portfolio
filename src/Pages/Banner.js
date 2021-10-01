import React from 'react'
import "./Common.css"
function Banner() {
    return (
        <section className="site-banner">
            <div className="banner-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h1 className="title-text text-uppercase">Abhishek Sawant</h1>
                        <h4 className="title-text text-uppercase">Full Stack Developer</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <button type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                    me</button>
                                {/* <button type="button" className="btn button secondary-button text-uppercase">Get cv</button> */}
                            </div>
                        </div>
                    </div>
                     <div className="col-lg-6 col-md-12 banner-image">
                        <img src="./images/banner.png" alt="banner-img" className="img-fluid"/>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Banner
