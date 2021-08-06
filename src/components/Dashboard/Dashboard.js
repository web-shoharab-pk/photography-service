import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import Navbar from '../Navbar/Navbar';
import AddService from './AddService/AddService';
import './Dashboard.css';

const Dashboard = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch('https://boiling-savannah-91879.herokuapp.com/allService')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setServices(data)
                if (data) {
                    setLoading(false);
                }
            })
            .catch(error => toast.error(error?.message));

        axios.get('https://boiling-savannah-91879.herokuapp.com/allOrderService')
            .then(data => {
                setOrders(data.data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        orders.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedOrders.push(order)
        })
        setOrders(modifiedOrders);
        const modifiedStatus = { id, status }
        axios.patch('https://boiling-savannah-91879.herokuapp.com/updateOrderStatus', modifiedStatus)
            .then(res => res.data && toast.success(`Set to ${status}`))
            .catch(error => toast.error(error.message));
    }

    const handleDeleteService = id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('Deleting...Please wait!');
                const removedServices = services.filter(item => item._id !== id);
                axios.delete(`https://boiling-savannah-91879.herokuapp.com/deleteService/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res) {
                            setServices(removedServices)
                            return swal("Successfully Deleted!", "Your service has been successfully deleted.", "success");
                        }
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
            }
        });
    }

    return (
        <div>
            <div style={{ backgroundColor: 'gray', position: 'fixed', color: 'black' }}>
                <Navbar />
            </div>
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row my-3">
                    <div className="col-md-6 mt-3">
                        <div>
                            <h1 className="text-center">All Services</h1>
                            {
                                loading ? <div className="px-md-4 pt-md-1 bg-white" style={{ borderRadius: "15px" }}>
                                    <Spinner animation="border" variant="danger" />
                                </div>
                                    :
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services?.map((service, index) => (

                                                    <tr key={service._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{service.title}</td>
                                                        <td>BDT {service.price}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => handleDeleteService(service._id)}
                                                                type="button" class="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }
                        </div>
                    </div>

                    <div className="col-md-6 mt-3">
                        <div className="div">
                            <h1 className="text-center">Order Services</h1>
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">UserName</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {
                                    loading ? <div className="px-md-4 pt-md-1 bg-white" style={{ borderRadius: "15px" }}>
                                        <Spinner animation="border" variant="danger" />
                                    </div> :
                                        <tbody>
                                            {
                                                orders?.map((service, index) => (

                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{service.title}</td>
                                                        <td>{service.price}</td>
                                                        <td>{service.userName}</td>
                                                        <td>
                                                            <select
                                                                className={service.status === "Pending" ? "btn btn-danger" : service.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                                                defaultValue={service.status}
                                                                onChange={e => handleStatusChange(service._id, e.target.value)}>
                                                                <option className="bg-white text-muted">Pending</option>
                                                                <option className="bg-white text-muted">On going</option>
                                                                <option className="bg-white text-muted">Done</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                }

                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <AddService />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;