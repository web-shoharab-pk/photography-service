import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://boiling-savannah-91879.herokuapp.com/allService')
            .then(res => res.json())
            .then((data) => {
                setServices(data)
                if (data) {
                    setLoading(false);
                }
            })
            .catch(error => toast.error(error?.message))
    }, [])

    return (
        <section id="services" className="text-center py-5">
            <h5>What We Do</h5>
            <h1>Services We Provide</h1>
            <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                {
                    loading ? <Spinner animation="border" variant="danger" /> :
                        services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </Row>
        </section>
    );
};

export default Services;