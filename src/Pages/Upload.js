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

            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Upload Image</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why_section layout_padding">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="full">
                                <form >
                                    <fieldset>
                                        <label> Image Content </label>
                                        {formError.Name && <span className="form_error"> * Required</span>}
                                        <input id="Name" type='text' placeholder='type here' onChange={valueFromInput}></input>

                                        <label>Upload Your Image Here : </label>
                                        {formError.Image && <span className="form_error"> * Required</span>}
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