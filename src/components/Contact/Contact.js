import React from 'react';
import NavBar from '../Home/Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <section>
            <div class="banner-text">
                <NavBar></NavBar>
                <div className="text-center text-white mt-5">
                    <h1>Contact With me</h1>
                    <div className="container mt-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                                <div id="emailHelp"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" placeholder="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea rows="5" name="message" type="text" class="form-control" placeholder="Message" required="" spellcheck="false"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                        <div className="text-center text-white" style={{marginTop:'90px'}}>
                            <small>© 2021 Md Rezaul Karim. All rights reserved. Created by Rezaul</small>
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

export default Contact;