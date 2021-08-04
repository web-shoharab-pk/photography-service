import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, serScroll] = useState(false)
    const handleClick = () => setClick(!click);
    console.log(scroll);
    window.addEventListener('scroll', (event) => {

        setTimeout(() => {
            serScroll(true)
        }, 200);
        
    })

    return (
        <div  className="navbarDiv">
 
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div style={{backgroundColor:  scroll ? '#C9CACE' : ''}} className="container-fluid positionFixed">
                        <NavLink className="navbar-brand" to="/">photography </NavLink>
                        <div onClick={handleClick} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <NavLink activeStyle={{borderBottom: '3px solid red'}} className="nav-link navOption" aria-current="page" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{borderBottom: '3px solid red'}} className="nav-link navOption" exact to="/myorder">MY ORDER</NavLink>
                                </li>
                                <li  className="nav-item">
                                    <NavLink activeStyle={{borderBottom: '3px solid red'}} className="nav-link navOption" to="/contact">CONTACT US</NavLink>
                                </li>
                                <li  className="nav-item">
                                    <NavLink activeStyle={{borderBottom: '3px solid red'}} className="nav-link navOption" to="/dashboard">DASHBOARD</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{borderBottom: '3px solid red'}} className="nav-link navOption" to="/login">LOGIN</NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </nav> 
        </div>
    );
};

export default Navbar;