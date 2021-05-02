import React from 'react';
import NavBar from '../Home/Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <section>
            <div class="banner-text">
                <NavBar></NavBar>
                <div className="row container d-flex">
                    <div className="col-md-6 mt-5">
                        <img className="ms-2" style={{ width: "400px" }} src="https://i.ibb.co/KbM8zMW/Sobi-removebg-preview.png" alt="" />
                    </div>
                    <div className="col-md-6 text-white" style={{marginTop: '200px'}}>
                        <h1 className="text-center">Hi, I am Rezaul Karim</h1>
                        <h5>I am a frontend web developer developer with knowing some framework for the frontend and the backend. I always focus on learning new technology. I am currently studying in the Department of Chemistry, National University.</h5>
                    </div>
                    <div className="text-center text-white" style={{marginTop:'190px'}}>
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
        </section>

    );
};

export default About;