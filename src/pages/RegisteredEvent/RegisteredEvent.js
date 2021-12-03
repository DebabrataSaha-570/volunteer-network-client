import React, { useState, useEffect } from 'react';
import RegisteredSingleEvent from '../RegisteredSingleEvent/RegisteredSingleEvent'
const RegisteredEvent = () => {
    const [registerEvents, setRegisterEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allRegisteredEvents')
            .then(res => res.json())
            .then(data => {
                setRegisterEvents(data)
            })
    }, [])
    const handleCancle = (id) => {
        console.log(id)
        const confirmation = window.confirm('Are you sure, you want to cancel this event? ')
        if (confirmation) {
            fetch(`http://localhost:5000/deleteEvent/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Event canceled successfully')
                        const newEvents = registerEvents.filter(event => event._id !== id)
                        setRegisterEvents(newEvents)
                    }
                })
        }


    }

    return (
        <>
            <section className="container mt-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {
                        registerEvents.map(event => <RegisteredSingleEvent handleCancle={handleCancle} key={event._id} event={event}> </RegisteredSingleEvent>)
                    }




                </div>
            </section>
        </>
    );
};

export default RegisteredEvent;