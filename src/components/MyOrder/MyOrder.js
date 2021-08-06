import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './MyOrder.css';

const MyOrder = () => {
    const { loggedUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

 
    useEffect(() => {
        axios.get(`https://boiling-savannah-91879.herokuapp.com/myOrderService/${loggedUser.email}`)
        .then(data => {
            setOrders(data.data);
            setLoading(false);
        })
        .catch(error => toast.error(error.message))
    }, [loggedUser.email])

    return (
        <div>
            <Navbar />
            <h1>My Order</h1><br /><br /><br />
            {loading ?
                <div className="px-md-4 pt-md-1 bg-white" style={{ borderRadius: "15px" }}>
                     <Spinner animation="border" variant="danger" />
                </div>
                : <Row className="mx-md-5">
                    {orders.map(order => {
                        return (
                            <Col key={order._id} md={6} lg={4}>
                                <Card className="border-0 mb-4 booking-list w-100">
                                    <div className="d-flex shadow rounded p-3 justify-content-between px-4 w-100">
                                        <div>
                                        <img
                                            height="250"
                                            width="250"
                                            src={order.image}
                                            alt=""
                                        />
                                        <h5 className={order.status.toLowerCase()}>{order.status}</h5>
                                        </div>
                                        
                                    
                                    <Card.Body className="py-0">
                                        <Card.Title as="h4" className="my-4">BDT {order.price}tk</Card.Title>
                                        <Card.Text as="h5" className="text-muted">Title: {order.title}</Card.Text>
                                    </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>}
        </div>
    );
};

export default MyOrder;