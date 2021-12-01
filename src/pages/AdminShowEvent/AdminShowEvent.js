import React from 'react';
import { Link } from 'react-router-dom';

const AdminShowEvent = () => {
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
                            <tr>
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
                            </tr>

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