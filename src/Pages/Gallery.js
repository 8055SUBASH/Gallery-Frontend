import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

const Gallery = () => {

    useEffect(() => {
        showImage();
    }, [])

    const [storeValue, updateStoreValue] = useState([])

    const showImage = () => {
        const url = "http://localhost:5000/api/read/image"
        axios.get(url)
            .then((response) => {
                updateStoreValue(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const output = storeValue.map((value, index) => {
        return (
            <div class="col-sm-6 col-md-4 col-lg-4" key={index}>
                <div class="box">

                    <div class="img-box">
                        <img src={value.Image} alt="Gallery"></img>
                    </div>
                    <div class="detail-box">
                        <h5>
                            {value.Name}
                        </h5>
                    </div>
                </div>
            </div>

        )
    }
    )

    return (
        <div>
            <Header></Header>

            <section class="product_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            <span>Gallery</span>
                        </h2>
                    </div>
                    <div class="row">
                        {output}
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Gallery;