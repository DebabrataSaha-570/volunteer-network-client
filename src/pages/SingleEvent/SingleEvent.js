import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { _id, name, event, image } = props.data
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data)

            })
    }, [])

    return (
        <>
            <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{event}</p>
                        <Link to={`/registerVolunteer/${_id}`}>
                            <button className="btn btn-primary">Register</button>

                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;