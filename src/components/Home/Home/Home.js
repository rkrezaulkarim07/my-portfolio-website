import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <div>
            <div class="banner-text">
                <NavBar></NavBar>
                <div className="text-center">
                    <img style={{width:'200px', marginTop: '35px'}} src="https://i.ibb.co/KbM8zMW/Sobi-removebg-preview.png" alt=""/>
                </div>
                <div>
                    <h3>Md Rezaul Karim</h3>
                    <h5>I am a frontend web developer. I can provide clean code and pixel perfect design. I also <br /> make website more & more interactive with web animations.
                </h5>
                    <div className="text-center mt-4">
                        <a href="https://github.com/rkrezaulkarim07" target="_blank"><FontAwesomeIcon className="icon" icon={faGithubSquare} /></a>
                        <a href="https://www.linkedin.com/in/rezaulkarim07/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                        <a href="https://www.facebook.com/rezaulkarim07/" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a>
                    </div>
                    <div className="text-center text-white footer">
                        <small>© 2021 Md Rezaul Karim. All rights reserved. Created by Rezaul</small>
                    </div>
                </div>
            </div>
            <div class="animation-area">
                <ul class="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;