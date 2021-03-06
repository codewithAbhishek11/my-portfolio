import React from 'react'
import "./Common.css"
function Header() {
    return (
        
        <header className="header_area">
        <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand title" href="#">PORFOLIO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    
    )
}

export default Header;
