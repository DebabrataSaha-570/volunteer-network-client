import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const [buttonStyle, setButtonStyle] = useState('login-button')
    const { user, signInUsingGoogle, error, setUser, setError, isLoading, setIsLoading } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    // console.log('came from', location.state?.from)

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {

                const user = result.user;
                setUser(user)
                console.log(user)
                history.push(redirect_uri)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage)
            })
            .finally(() => setIsLoading(false))

    }
    return (

        <>
            <section className="login-box">
                <h3>Login</h3>
                <button onClick={handleGoogleLogin} className={buttonStyle}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                    <b className="">Continue with Google</b>
                </button>
                <p>Don't have an account? create one</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </section>
        </>

    );
};

export default Login;