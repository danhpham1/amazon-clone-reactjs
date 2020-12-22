import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" onChange={e => { setEmail(e.target.value) }} />
                    <h5>Password</h5>
                    <input type="password" onChange={e => { setPassword(e.target.value) }} />
                    <button className="login__signInButton" type='submit' onClick={signIn}>
                        Sign In
                    </button>
                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login__registerButton" type='submit' onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
