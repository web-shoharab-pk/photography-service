import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import image1 from './../../images/imageC3.jpg';
import image2 from './../../images/image1.jpg';
import image3 from './../../images/photo2.jpg';

const Header = () => {
    return (
        <main className="header">
            <Navbar />
            <div className="bg-light">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style={{ height: '100vh' }} src={image1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>OUTDOR PHOTOGRAPHY</h5>
                                <p>Extra Edited Photos: 100 Copies Special Edited Photos. ** Exclusive Photo Album.** All Photos also provide on DVD/Pen drive/HDD. **</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img style={{ height: '100vh' }} src={image2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>PREMIUM PHOTOGRAPHY</h5>
                                <p>Extra Edited Photos: 100 Copies Special Edited Photos. ** Exclusive Photo Album.** All Photos also provide on DVD/Pen drive/HDD. **</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img style={{ height: '100vh' }} src={image3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>STANDARD PHOTOGRAPHY </h5>
                                <p> Light Setup: Umbrella, LED Light, Soft Box, Beauty Dish, Octa etc & essential Light setup. NB. Extra light setup & other essential equipment includes in all package</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Header;