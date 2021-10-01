import React from 'react'

function ProjectJS() {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                <div className="our-project">
                    <div className="img">
                    <img src="./images/search-your-vaccine.jpg" alt="portfolio-4" className="img-fluid"/>
                    </div>
                    <div className="title py-4">
                        <h4 className="text-uppercase">Search Your Vaccine</h4>
                        <span className="text-secondary">Javascript</span><br/>
                        <a  href="https://github.com/codewithAbhishek11/searchforvaccine" target="_blank">
                                <button className="btn btn-warning">GitHub</button>
                                </a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                <div className="our-project">
                    <div className="img">
                            <img src="/images/check-your-memory.jpg" alt="portfolio-8" className="img-fluid"/>
                    </div>
                    <div className="title py-4">
                        <h4 className="text-uppercase">Memory Game</h4>
                        <span className="text-secondary">Javascript</span><br/>
                        <a href="https://github.com/codewithAbhishek11/MemoryGame" target="_blank">
                                <button className="btn btn-warning">GitHub</button>
                                </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                        <div className="our-project">
                            <div className="img">
                                
                                    <img src="./images/tic-tac-toe.jpg" alt="portfolio-9" className="img-fluid"/>
                           
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Tic Tac Toe</h4>
                                <span className="text-secondary">Javascript</span><br/>
                                <a href="https://github.com/codewithAbhishek11/Tic-Tac-Toe" target="_blank">
                                <button className="btn btn-warning">GitHub</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    
        </>
            
    )
}

export default ProjectJS
