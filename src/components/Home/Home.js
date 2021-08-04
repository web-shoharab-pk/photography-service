import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header.js/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />


            <Services />
            <div id="contact">
            <Footer />
            </div>
            
        </div>
    );
};

export default Home;