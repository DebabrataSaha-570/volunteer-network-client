import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <>
            <nav className="volunteer-navbar navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/XD0V3g8/Group-1329.png" alt="" width="130" height="40" />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            {user.displayName && <li className="nav-item">
                                <a className="nav-link active" aria-current="page" ><strong>{user.displayName}</strong></a>
                            </li>}
                            {user.displayName ? <li className="nav-item">
                                <a onClick={logOut} className="nav-link active" aria-current="page" >LogOut</a>
                            </li>

                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
                                </li>
                            }
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page" >Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registeredEvent" className="nav-link active" aria-current="page" >Your Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/adminShowEvent">

                                    <button className="btn btn-primary">Admin</button>
                                </Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;