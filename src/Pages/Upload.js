import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

const Upload = () => {

    const [imageForm, updateImageForm] = useState({
        Name: "",
        Image: ""
    })
    const [formError, updateFormError] = useState({
        Name: false,
        Image: false,
    })

    const valueFromInput = (event) => {
        updateImageForm({ ...imageForm, [event.target.id]: event.target.value });
    }




    const uploadImage = () => {

        updateFormError({
            ...formError,
            Name: imageForm.Name === "" ? true : false,
            Image: imageForm.Image === "" ? true : false,

        })

        const url = "http://localhost:5000/api/create/image"

        axios.post(url, imageForm)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const imageUpload = (event) => {
        const image_reader = new FileReader();
        const image_file = event.target.files[0];
        image_reader.readAsDataURL(image_file);

        image_reader.onload = () => {
            updateImageForm({ ...imageForm, "Image": image_reader.result });
        }
    }

    return (
        <div>
            <Header></Header>

            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <h3>Upload Image</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why_section layout_padding">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="full">
                                <form >
                                    <fieldset>
                                        <label> Image Content </label>
                                        {formError.Name && <span class="form_error"> * Required</span>}
                                        <input id="Name" type='text' placeholder='type here' onChange={valueFromInput}></input>

                                        <label>Upload Your Image Here : </label>
                                        {formError.Image && <span class="form_error"> * Required</span>}
                                        <input id="Image" type="file" file="file" accept='.png, .jpg, .jpeg' required onChange={imageUpload} />

                                    </fieldset>
                                    <button className='btn btn-dark' onClick={() => uploadImage()}>Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Upload;