import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="NavBar">
            <div className="container">
                <div className="left_content">
                    <div className="logo">EDYODA</div>
                    <div className="courses">Courses</div>
                    <div className="programs">Programs</div>
                </div>
                <div className="right_content">
                    <div className="search_icon"><i className="fa fa-search"></i></div>
                    <div className="login">Log in</div>
                    <button className="primary_btn">JOIN NOW</button>
                </div>
            </div>   
        </div>
    )   
}

export default Navbar;