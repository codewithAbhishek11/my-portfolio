import React from 'react'
import "./Common.css"
function AboutArea() {
    return (
        <section className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                        <img src="./images/aboutme.png" alt="aboutme-img" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            <span>My</span>
                            <span>Introduction</span>
                            
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                            An Engineering Graduate,with 2 years of experience as Design Engineer in Reasearch and Developement
                            of Automobile Industry.
                            Responsible for New Product Developement,Failure Mode Analysis and Prototyping.
                            </p>
                            <p className="para">
                            A coding enthusiast;specializing is full stack development and object oriented programming language.
                            Upskilling everyday to be a result oriented software developer.
                            </p>
                        </div>
                        {/* <button type="button" className="btn button primary-button text-uppercase">Download cv</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutArea
