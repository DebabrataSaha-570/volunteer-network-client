import React from 'react';

const RegisteredSingleEvent = (props) => {
    const { _id, name, email, eventName, eventDescription, image } = props.event

    // const handleCancle = (id) => {
    //     console.log(id)
    //     const confirmation = window.confirm('Are you sure, you want to cancel this event? ')
    //     if (confirmation) {
    //         fetch(`http://localhost:5000/deleteEvent/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //             })
    //     }


    // }


    return (
        <>
            <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text">{eventDescription}</p>
                        <button onClick={() => props.handleCancle(_id)} className="btn btn-danger">Cancel</button>
                        {/* <button onClick={() => handleCancle(_id)} className="btn btn-danger">Cancel</button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisteredSingleEvent;