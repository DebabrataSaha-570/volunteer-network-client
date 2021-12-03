import { React, useRef, useState } from 'react';

const AdminAddEvent = () => {
    const [event, setEvent] = useState('')
    const nameRef = useRef()
    const eventRef = useRef()
    const imageRef = useRef()

    const handleAddEvent = (e) => {
        e.preventDefault()
        const nameValue = nameRef.current.value;
        const eventValue = eventRef.current.value;
        const imageValue = imageRef.current.value;

        const eventData = { name: nameValue, event: eventValue, image: imageValue }
        setEvent(eventData)
        // console.log(eventData)
        fetch('https://limitless-beyond-04519.herokuapp.com/addEvent', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Event added Successfully')
                    nameRef.current.value = ''
                    eventRef.current.value = ''
                    imageRef.current.value = ''
                }
            })
    }
    return (
        <>
            <section className="container my-5 p-5">
                <form onSubmit={handleAddEvent}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Event Name</label>
                        <input ref={nameRef} placeholder="Event Name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleEventDescription" className="form-label">Event Description</label>
                        <textarea ref={eventRef} className="form-control" placeholder="Event Description" id="exampleEventDescription" rows="5"></textarea>
                    </div>

                    <div className="mb-3">
                        <label for="exampleImgUrl" className="form-label">Image URL</label>
                        <input ref={imageRef} type="text" className="form-control" placeholder="Image URL" id="exampleImgUrl" />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add This Event" />
                </form>
            </section>
        </>
    );
};

export default AdminAddEvent;