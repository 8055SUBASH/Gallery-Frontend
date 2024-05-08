import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="full">
                                <div class="logo_footer">
                                    <a href="#"><img width="210" src={require("../Image/header-logo.png")} alt="#" /></a>
                                </div>
                                <div class="information_f">
                                    <p><strong>TELEPHONE:</strong> 1234567890</p>
                                    <p><strong>EMAIL:</strong> sample@mail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="widget_menu">
                                                <h3>Menu</h3>
                                                    <ul class="navbar-nav">
                                                        <NavLink to="/" className="nav-item"><a href="index.html" className="nav-link">Home</a></NavLink>
                                                        <NavLink to="/gallery" className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></NavLink>
                                                        <NavLink to="/upload" className="nav-item"><a href="upload.html" className="nav-link">Upload</a></NavLink>
                                                        <NavLink to="/delete" className="nav-item"><a href="delete.html" className="nav-link">Delete</a></NavLink>
                                                    </ul>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="widget_menu">
                                                <h3>Features</h3>
                                                <ul>
                                                    <li>View</li>
                                                    <li>Upload</li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <img src={require("../Image/footer-logo.png")} style={{ height: "250px" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;