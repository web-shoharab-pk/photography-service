import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();  
 
 
    const onSubmit = async data => {

        if (!data.image[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!');

        let imageURL = '';
        const imageData = new FormData();
        imageData.set('key', '08d5da1c81cc5c52012f0b930505d031');
        imageData.append('image', data.image[0]);
        try {
            const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
            imageURL = res.data.data.display_url;
            if(imageURL) {
                toast.dismiss(loading);
            }
        } catch (error) {
           
            return toast.error('Failed to upload the image!');
        }

        const serviceInfo = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: imageURL
        }

        axios.post('https://boiling-savannah-91879.herokuapp.com/addService', serviceInfo)
        .then(res => {
            toast.dismiss(loading);
            console.log("res",res);
            if (res.config) {
                swal("Successfully Uploaded", "Your new service has been successfully added.", "success");
            } 
        })
        .catch(error => {
            toast.dismiss(loading);
            console.log(error);          
            swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        });

    }
    return (
        <div className="container text-center my-5">
            <section className="add-service shadow rounded">
                <h1>Add Your Service!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                        <input className="serviceInput" placeholder="Service Title" {...register("title", { required: true })} type="text" />
                        <input className="serviceInput" type="number" placeholder="Service Price" {...register("price", { required: true })}  />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <input style={{ width: '70%', height: '8rem' }} className="serviceInput" placeholder="Service Description" {...register("description", { required: true })} type="text" />

                        <Button
                            as={"label"}
                            htmlFor="upload"
                            variant="outline-primary"
                            className="d-block p-2 upload-btn">
                            <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" /> Upload Image
                            <Form.Control
                                hidden="hidden"
                                id="upload"
                                type="file"
                                {...register("image", { required: true })}
                                placeholder="Upload photo" />
                        </Button>
                      

                    </div>
                    <div>
                    {errors.title && <p style={{ color: 'red' }}>Title field is required</p>}
                        {errors.price && <p style={{ color: 'red' }}>Price field is required</p>}
                        {errors.description && <p style={{ color: 'red' }}>Description field is required</p>}
                        {errors.image && <p style={{ color: 'red' }}>Image field is required</p>}
                    </div>
                    <button className="submitBtn" type="submit">Submit</button>

                </form>
            </section>
        </div>
    );
};

export default AddService;