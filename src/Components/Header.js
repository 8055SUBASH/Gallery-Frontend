import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [menu, updateMenu] = useState(false);
    const menuButton = () => {
        updateMenu(!menu)
    }

    return (
        <div>
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html"><img width="250" src={require("../Image/header-logo.png")} alt="#" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => menuButton()}>
                            <span class=""> </span>
                        </button>
                        <div class={menu ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <NavLink to="/" className="nav-item"><a href="index.html" className="nav-link">Home</a></NavLink>
                                <NavLink to="/gallery" className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></NavLink>
                                <NavLink to="/upload" className="nav-item"><a href="upload.html" className="nav-link">Upload</a></NavLink>
                                <NavLink to="/delete" className="nav-item"><a href="delete.html" className="nav-link">Delete</a></NavLink>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header >
        </div >
    );
};

export default Header;