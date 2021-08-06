import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const BookingService = () => {
    const { singleService, loggedUser } = useContext(UserContext);
 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        let info = { ...data, image: singleService.image, title: singleService.title, price: singleService.price, userEmail: loggedUser?.email, userName: loggedUser?.displayName, status: 'pending' }
        console.log(info)
        console.log(singleService)
        const loading = toast.loading('Uploading...Please wait!');
        axios.post('https://boiling-savannah-91879.herokuapp.com/bookingService', info)
            .then(res => {
                toast.dismiss(loading);
                console.log("res", res);
                if (res.config) {
                    swal("Booking Successful", "new booking successfully booked!", "success");
                }
            })
            .catch(error => {
                toast.dismiss(loading); 
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });

    };

    return (
        <>
            <Navbar />
            <br /><br /><br />
            <section id="services" className="text-center py-5">

                <h1>Please Provide Your Information</h1>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                                <div className="w-100 mt-3 p-3">
                                    <h4>Name:</h4>
                                    <input placeholder="Name" className="serviceInput" {...register("name", { required: true })} />

                                    <h4 className="mt-3">Email:</h4>
                                    <input placeholder="Email" type="email" className="serviceInput" {...register("email", { required: true })} />
                                </div>

                            </div>

                            <div className="d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                                <div className="w-100 mt-3 p-3">
                                    <h4>Address:</h4>
                                    <input placeholder="Address" className="serviceInput" {...register("address", { required: true })} />
                                    <h4 className="mt-3">Phone:</h4>
                                    <input placeholder="Phone" type="number" className="serviceInput" {...register("phone", { required: true })} />
                                </div>

                            </div>

                        </div>
                        <div>
                            {errors.name && <p style={{ color: 'red' }}>This field is required</p>}
                            {errors.email && <p style={{ color: 'red' }}>This field is required</p>}
                            {errors.address && <p style={{ color: 'red' }}>This field is required</p>}
                            {errors.phone && <p style={{ color: 'red' }}>This field is required</p>}
                        </div>


                        <div className="d-flex align-items-center justify-content-center">
                            <input style={{ width: '50%' }} className="submitBtn" type="submit" />
                        </div>

                    </form>
                </div>
            </section></>
    );
};

export default BookingService;