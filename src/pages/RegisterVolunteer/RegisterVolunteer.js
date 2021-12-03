import { Button } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
} from '@material-ui/pickers';

const RegisterVolunteer = () => {
    let { id } = useParams()
    let history = useHistory()

    const [registeredEvent, setRegisteredEvent] = useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date().toLocaleString());
    // const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().slice(0, 10));
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://limitless-beyond-04519.herokuapp.com/singleEvent/${id}`)
            .then(res => res.json())
            .then(data => {
                setRegisteredEvent(data)
            })
    }, [])
    const nameRef = useRef()
    const emailRef = useRef()
    const eventNameRef = useRef()

    const eventDescriptionRef = useRef()

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    // console.log(selectedDate)

    const handleAddRegistration = (e) => {
        e.preventDefault()
        const nameValue = nameRef.current.value;
        const emailValue = emailRef.current.value;
        const eventNameValue = eventNameRef.current.value;
        const eventDescriptionValue = eventDescriptionRef.current.value;
        const eventImage = registeredEvent?.image;
        const registration = { name: nameValue, email: emailValue, eventName: eventNameValue, eventDescription: eventDescriptionValue, date: selectedDate, image: eventImage }
        console.log(registration)

        fetch('https://limitless-beyond-04519.herokuapp.com/registeredEvent', {
            method: 'POST',
            body: JSON.stringify(registration),
            headers: {
                'Content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Registration Completed')
                    history.replace('/registeredEvent')
                }
            })
    }
    return (
        <>
            {registeredEvent ? <section className="w-50 mx-auto my-2 p-5">
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
                        <input ref={emailRef} value={user.email || user?.reloadUserInfo?.providerUserInfo[0].email || ''} placeholder="Event Name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Event Name</label>
                        <input ref={eventNameRef} value={registeredEvent.name || ''} placeholder="Event Name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleEventDescription" className="form-label">Event Description</label>
                        <textarea ref={eventDescriptionRef} value={registeredEvent.event || ''} className="form-control" placeholder="Event Description" id="exampleEventDescription" rows="5"></textarea>
                    </div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>


                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />


                    </MuiPickersUtilsProvider>
                    <br />
                    <input type="submit" className="btn btn-primary" value="Registration" />
                </form>
            </section>
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    );
};

export default RegisterVolunteer;