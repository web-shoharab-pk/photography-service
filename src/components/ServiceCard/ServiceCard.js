import React from 'react';
import './ServiceCard.css';

const ServiceCard = () => {
    return (
        <div>
            <div class="bg"></div>
            <div class="container p-3 my-5">
                <div class="plan">
                    <img src="https://i.postimg.cc/ncHLd8m9/paper-plane.png" alt="" />
                    <h3>PERSONAL</h3>
                    <ul>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DEVELOPMENT</span>
                        </li>
                        <li>
                            <i class="fa fa-times bg-icon" aria-hidden="true"></i>
                            <span>UI/UX DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-times bg-icon" aria-hidden="true"></i>
                            <span>GRIPHIC DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-times bg-icon" aria-hidden="true"></i>
                            <span>SEO EXPERT</span>
                        </li>
                        <li>
                            <i class="fa fa-times" aria-hidden="true"></i>
                            <span>TEAM WORK</span>
                        </li>
                    </ul>
                    <p class="price">FREE</p>
                    <button class="btn sign">SIGN UP</button>
                </div>
                <div class="plan selected">
                    <img src="https://i.postimg.cc/9XYHJXg8/plane.png" alt="" />
                    <h3>SMALL TEAM</h3>
                    <ul>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DEVELOPMENT</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>UI/UX DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>GRIPHIC DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-times bg-icon" aria-hidden="true"></i>
                            <span>SEO EXPERT</span>
                        </li>
                        <li>
                            <i class="fa fa-times bg-icon" aria-hidden="true"></i>
                            <span>TEAM WORK</span>
                        </li>
                    </ul>
                    <p class="price">$50</p>
                    <button class="btn free-trail active">FREE TRIAL</button>
                </div>
                <div class="plan">
                    <img src="https://i.postimg.cc/BvHPrJVs/space-ship.png" alt="" />
                    <h3>ENTERPRISE</h3>
                    <ul>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>WEB DEVELOPMENT</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>UI/UX DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>GRIPHIC DESIGNER</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>SEO EXPERT</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>TEAM WORK</span>
                        </li>
                    </ul>
                    <p class="price">$100</p>
                    <button class="btn free-trail">FREE TRIAL</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;