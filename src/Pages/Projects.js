import React, { useState } from 'react'
import { BrowserRouter, Link, Switch,Route } from 'react-router-dom';
import "./Common.css"
import ProjectJS from './ProjectJS';
import ReactProject from './ReactProject';
import AcademicProject from './AcademicProject';
import UpcomingProject from './UpcomingProject';
import AllProject from './AllProject';
function Projects() {


    const [displayStatus, setDisplayStatus] = useState("all")

    const changeStatus=(value)=>{
console.log(value);
    }

    
    return (
        <section className="project-area">
            <div className="container">
                <div className="project-title pb-5">
                    <h1 className="text-uppercase title-h1 title-projects">Projects</h1>
                </div>
                <BrowserRouter>
                <div className="button-group">
                    <Link to="/allProject"><button type="button" className="active" id="btn1"   onClick={(e)=>changeStatus(e.target.value)} value="all"data-filter="*">All</button></Link>
                    <Link to="/academiProject"><button type="button" onClick={(e)=>changeStatus(e.target.value)} value="academic" data-filter=".popular">Academic</button></Link>
                    <Link to="/reactProject"><button type="button" onClick={(e)=>changeStatus(e.target.value)} value="react" data-filter=".latest">React JS</button></Link>
                    <Link to="/ProjectJS"><button type="button" onClick={(e)=>changeStatus(e.target.value)} value="javascript" data-filter=".latest">Javascript</button></Link>
                    <Link to="/upcomingProject"><button type="button" onClick={(e)=>changeStatus(e.target.value)} value="upcoming" data-filter=".upcoming">Upcoming</button></Link>
                </div>

                <div className="row grid">
                    <Switch>
                        <Route path="/ProjectJS" component={ProjectJS}></Route>
                        <Route path="/reactProject" component={ReactProject}></Route>
                        <Route path="/allProject" component={AllProject}></Route>
                        <Route path="/academiProject" component={AcademicProject}></Route>
                        <Route path="/upcomingProject" component={UpcomingProject}></Route>
                    </Switch>
            </div>
            </BrowserRouter>
            </div>
        </section>

    )
}

export default Projects
