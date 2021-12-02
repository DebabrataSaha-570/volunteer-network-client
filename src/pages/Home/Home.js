import React, { useEffect, useState } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data)

            })
    }, [])
    console.log('events', events)
    return (
        <>
            {events.length > 0 ? <section className="container">

                <div className="d-flex justify-content-center my-3">
                    <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>

                </div>

                {/* cards */}
                <div className="row row-cols-1 row-cols-md-4 g-4">


                    {
                        events.map(event => <SingleEvent data={event}> </SingleEvent>)
                    }



                </div>
            </section>
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    );
};

export default Home;