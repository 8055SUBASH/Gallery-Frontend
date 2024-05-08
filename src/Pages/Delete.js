import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';


const Delete = () => {

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

    const deleteImage = (id) => {
        const url = "http://localhost:5000/api/delete/image/" + id;
        axios.delete(url)
            .then((response) => {
                alert("Image Deleted");
                showImage();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const output = storeValue.map((value, index) => {
        return (
            <div class="col-sm-6 col-md-4 col-lg-4" key={index}>
                <div class="box">
                    <div class="option_container">
                        <div class="options">
                            <button href="" class="btn btn-outline-danger" onClick={() => deleteImage(value.id)}> Delete </button>
                        </div>
                    </div>
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
    })

    return (
        <div>
            <Header></Header>

            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <h3>Delete Image</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="product_section layout_padding">
                <div class="container">
                    <div class="row">
                        {output}
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Delete;