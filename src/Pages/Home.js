import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>

            <Header></Header>

            <section className="slider_section ">
                <div className="slider_bg_box">
                    <img src={require("../Image/home.jpg")} alt=""></img>
                </div>
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 "><hr></hr>
                                        <div className="detail-box">
                                            <h1>
                                                <span>
                                                    Image Gallery
                                                </span>
                                                <br></br>
                                                Application
                                            </h1>
                                            <p>

                                                A gallery typically refers to a space, either physical or digital, where works of art, photographs, or other visual content are displayed for public viewing or personal enjoyment. You can View, Upload and Delete images from database.
                                            </p>
                                            <div className="btn-box">
                                                <a href="/gallery" className="btn1">
                                                    Visit Gallery
                                                </a>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Features
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box ">


                                <div className="detail-box">
                                    <i className="fa-solid fa-photo-film" style={{ color: "#f83f48", fontSize: "50px", paddingBottom: "20px" }} ></i>
                                    <h5>
                                        View
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="detail-box">
                                    <i className="fa-solid fa-upload" style={{ color: "#f83f48", fontSize: "50px", paddingBottom: "20px" }} ></i>
                                    <h5>
                                        Upload
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="detail-box">
                                    <i className="fa-solid fa-delete-left" style={{ color: "#f83f48", fontSize: "50px", paddingBottom: "20px" }} ></i>
                                    <h5>
                                        Delete
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>

        </div>
    );
};

export default Home;