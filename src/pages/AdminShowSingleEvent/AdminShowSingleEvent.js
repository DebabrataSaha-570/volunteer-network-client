import React from 'react';

const AdminShowSingleEvent = (props) => {
    const { _id, name, email, date, eventName } = props.volunteer;

    return (
        <>
            <tr>
                <th scope="row">{name}</th>
                <td>{email}</td>
                <td>{date}</td>
                <td>{eventName}</td>
                <td><button onClick={() => props.handleDelete(_id)} className="btn btn-danger">Delete</button></td>
            </tr>
        </>
    );
};

export default AdminShowSingleEvent;