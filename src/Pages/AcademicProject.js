import React from 'react'

function AcademicProject() {
    return (
        <>
        <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div className="our-project">
                            <div className="img">
                            <img src="./images/scm.png" alt="portfolio-3" className="img-fluid"/>
                            </div>
                            <div className="title py-4 scm">
                                <h4 className="text-uppercase">Supply Chain Management</h4>
                                <span className="text-secondary">Academic, ReactJS</span><br/>
                                <a href="https://github.com/codewithAbhishek11/supply-chain-management" target="_blank">
                                <button className="btn btn-warning">GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default AcademicProject
