import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import bgImage from './../../images/footerImage.jfif';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer" className="px-3 py-5" style={{backgroundImage: `url(${bgImage})`, width: '100%', height: '100%'}}>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <div>
                        <ul>
                            <NavLink className="navbar-brand" to="/">photography </NavLink>
                           
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <div>
                        <ul>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <div>
                        <ul>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                            <li className="footerList">
                                <Link className="footerLink" to="/#">Your link</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <div className="text-center d-flex align-items-center justify-content-center">
                        <div className="subs">
                            <input className="subsInput" type="email" placeholder="Subscribe now!" />
                            <button className="subsBtn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;