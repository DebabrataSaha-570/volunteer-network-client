import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const RegisterVolunteer = () => {
    let { id } = useParams()
    const [registeredEvent, setRegisteredEvent] = useState({})
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/singleEvent/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRegisteredEvent(data)
            })
    }, [])
    const nameRef = useRef()
    const eventRef = useRef()
    const imageRef = useRef()

    const handleAddRegistration = (e) => {
        e.preventDefault()
        const nameValue = nameRef.current.value;
        const eventValue = eventRef.current.value;


        const eventData = { name: nameValue, event: eventValue }
        console.log(eventData)



    }
    return (
        <>
            <section className="w-50 mx-auto my-5 p-5">
                <div className="d-flex justify-content-center mb-3">
                    <h3>Register for this event</h3>
                </div>
                <form onSubmit={handleAddRegistration} className="">
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Full Name</label>
                        <input ref={nameRef} value={user.displayName || ''} placeholder="Full Name" type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input ref={nameRef} value={user.email || user?.reloadUserInfo?.providerUserInfo[0].email || ''} placeholder="Event Name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Event Name</label>
                        <input ref={nameRef} value={registeredEvent.name || ''} placeholder="Event Name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleEventDescription" className="form-label">Event Description</label>
                        <textarea ref={eventRef} value={registeredEvent.event || ''} className="form-control" placeholder="Event Description" id="exampleEventDescription" rows="5"></textarea>
                    </div>


                    <input type="submit" className="btn btn-primary" value="Registration" />
                </form>
            </section>
        </>
    );
};

export default RegisterVolunteer;