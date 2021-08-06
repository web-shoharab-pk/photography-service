import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const SingleService = () => {

    const { singleService, setSingleService } = useContext(UserContext);

    let isAdmin = localStorage.getItem('email') === 'test@test.com';
    console.log(singleService);
    return (
        <>
            <Navbar />
            <br /><br /><br /><br />
            <div className="container card shadow">
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-3">
                        <div>
                            <img className="img-fluid" src={singleService?.image} alt="" />

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-3 ">
                        <div style={{color: '#ed5217'}}>
                            <h2>Package Name: {singleService?.title}</h2>
                            <div className="d-flex align-items-center justify-content-between">
                                <h6>Price: BDT {singleService?.price}tk</h6>
                                <h6>Package ID: {singleService?._id}</h6>
                            </div>

                            <div>
                                <h4>description</h4>
                                <p>{singleService?.description}</p>
                            </div>
                            <Button
                            style={{width: '100%'}}
                                as={Link}
                                to={isAdmin ? "/dashboard" : "/bookingService"}
                                onClick={() => setSingleService(singleService)}
                                className="submitBtn mt-3">Book Now</Button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleService;