import React from 'react';
import NavBar from '../Home/Navbar/Navbar';
import './Projects.css';

const Projects = () => {
    return (
        <section>
            <div class="banner-text">
                <NavBar></NavBar>
                <div className="text-center text-white mt-5 mb-5">
                    <h1>Latest Projects</h1>
                </div>
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img style={{ width: '100%', height: '200px' }} src="https://i.ibb.co/z7d96CK/phone-repair-544d7-web-app-Laptop-with-MDPI-screen-2.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Phone Repair is a mobile service provider website that services all types of iPhone and Android phones
                                    without any problems. We have skilled technicians who service the phones.
                                    </p>
                                </div>
                                <div className="d-flex m-auto">
                                    <a className="btn btn-success me-5" href="https://phone-repair-544d7.web.app/" target="_blank">Live link</a>
                                    <a className="btn btn-success" href="https://github.com/rkrezaulkarim07/phone-repair-client" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img style={{ width: '100%', height: '200px' }} src="https://i.ibb.co/jbsPyWr/books-paradise-65ecc-web-app-Laptop-with-Hi-DPI-screen.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text"> Books Paradise is an online book-selling website. All kinds of books are sold here.</p>
                                </div>
                                <div className="d-flex m-auto">
                                    <a className="btn btn-success me-5" href="https://books-paradise-65ecc.web.app/" target="_blank">Live link</a>
                                    <a className="btn btn-success" href="https://github.com/rkrezaulkarim07/books-paradise-client" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img style={{ width: '100%', height: '200px' }} src="https://i.ibb.co/zVZ7VSS/relaxed-lamarr-ef49f5-netlify-app-Laptop-with-Hi-DPI-screen.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Football Club Tracker is a sports-related website.You can see the team logo, team description, And you get it on Facebook, Youtube, Instagram, and Twitter links </p>
                                </div>
                                <div className="d-flex m-auto">
                                    <a className="btn btn-success me-5" href="https://relaxed-lamarr-ef49f5.netlify.app" target="_blank">Live link</a>
                                    <a className="btn btn-success" href="https://github.com/rkrezaulkarim07/football-club-tracker" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
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

export default Projects;