import React, { useState } from 'react';
import './Login.css'
const Login = () => {
    const [buttonStyle, setButtonStyle] = useState('login-button')

    return (

        <>
            <section className="login-box">
                <h3>Login</h3>
                <button onClick={() => setButtonStyle('login-clicked-button')} className={buttonStyle}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <b className="">Continue with Google</b>
                </button>
                <p>Don't have an account? create one</p>
            </section>
        </>

    );
};

export default Login;