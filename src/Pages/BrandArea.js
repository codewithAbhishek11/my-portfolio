import React from 'react'
import "./Common.css"
function BrandArea() {
    return (
        <section className="brand-area">
            <div className="container-fluid">
            <h1 className="text-uppercase title-text">Projects Handled</h1>
                <div className="row">
               
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="first-row row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    Mahindra Swaraj
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    Case New Holland
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                Bajaj Platina
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    Mahindra Alfa
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                Mahindra Bolero
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                   Mahindra NSM
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="experience-area">
                            <div className="d-flex flex-row years-area">
                                <h2 className="p-3 years"> 2 </h2>
                                <h2>
                                    <span>Years of</span>
                                    <span>Working</span>
                                    <span>Experience</span>
                                    <p className="non-it">(Non-IT)</p>
                                </h2>
                                
                            </div>
                            <div className="d-flex flex-row flex-wrap call-area">
                                <span><i className="fas fa-phone-alt fa-3x px-3"></i></span>
                                <div className="call-now">
                                    <a href="#" className="text-uppercase h4 font-roboto">Contact</a>
                                    <span className="font-roboto py-2">(+91)-897-530-1281</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BrandArea
