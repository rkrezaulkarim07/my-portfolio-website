import React from 'react';
import NavBar from '../Home/Navbar/Navbar';
import './Blog.css';

const Blog = () => {
    return (
        <section>
            <div class="banner-text">
                <NavBar></NavBar>
                <div className="text-center text-white mt-5">
                    <h1 className="fs-75" >Coming soon.....</h1>
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

export default Blog;