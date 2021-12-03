import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import './AdminShowSingleEvent.css'
const AdminShowSingleEvent = (props) => {
    const { _id, name, email, date, eventName } = props.volunteer;

    return (
        <>
            <tr className="row-area">
                <th scope="row">{name}</th>
                <td>{email}</td>
                <td>{date}</td>
                <td>{eventName}</td>
                <td><h5 onClick={() => props.handleDelete(_id)} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></h5></td>
                {/* <td><button onClick={() => props.handleDelete(_id)} className="btn btn-danger">Delete <FontAwesomeIcon icon={faCoffee} /></button></td> */}
            </tr>
        </>
    );
};

export default AdminShowSingleEvent;