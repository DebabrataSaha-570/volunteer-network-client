import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminShowSingleEvent from '../AdminShowSingleEvent/AdminShowSingleEvent'
const AdminShowEvent = () => {
    const [registeredVolunteer, setRegisteredVolunteer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allRegisteredEvents')
            .then(res => res.json())
            .then(data => {
                setRegisteredVolunteer(data)
            })
    }, [])
    const handleDelete = (id) => {
        console.log(id)
        const confirmation = window.confirm('Are you sure , you want to remove this volunteer?')
        if (confirmation) {
            fetch(`http://localhost:5000/deleteEvent/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Volunteer removed successfully')
                        const newVolunteers = registeredVolunteer.filter(volunteer => volunteer._id !== id)
                        setRegisteredVolunteer(newVolunteers)
                    }
                })
        }

    }
    return (
        <>
            <section className="container">


                <div className="d-flex justify-content-center my-3">
                    <h3>Volunteer register list</h3>
                </div>

                <section >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Registration Date</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                registeredVolunteer.map(volunteer => <AdminShowSingleEvent key={volunteer._id} volunteer={volunteer} handleDelete={handleDelete} > </AdminShowSingleEvent>)
                            }


                            {/* <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr> */}

                        </tbody>
                    </table>
                </section>
                <Link to="/adminAddEvent">

                    <button className="btn btn-primary">Add Event</button>
                </Link>
            </section>
        </>
    );
};

export default AdminShowEvent;