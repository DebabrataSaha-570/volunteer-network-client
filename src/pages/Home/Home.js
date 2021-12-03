import React, { useEffect, useState } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://limitless-beyond-04519.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data)

            })
    }, [])
    // console.log('events', events)
    return (
        <>
            <section className="container">

                <div className="d-flex justify-content-center my-3">
                    <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>

                </div>

                {/* cards */}
                {events.length > 0 ? <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">


                    {
                        events.map(event => <SingleEvent data={event} key={event._id}> </SingleEvent>)
                    }



                </div>
                    :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </section>

        </>
    );
};

export default Home;