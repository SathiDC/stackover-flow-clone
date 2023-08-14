import React, { useState } from "react";
import icon from '../../assets/icon.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AboutAuth from "./AboutAuth";
import { signup, login } from '../../actions/auth'
import './Auth.css'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignUp(!isSignUp)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email && !password) {
            alert("Enter valid credentials")
        }
        if (isSignUp) {
            if (!name) {
                alert("enter the name");
            }
            dispatch(signup({ name, email, password }, navigate))
        } else {
            dispatch(login({ email, password }, navigate))
        }
    }

    return (
        <section className="auth-section">
            {isSignUp && <AboutAuth />}

            <div className="auth-container-2">
                {!isSignUp && <img src={icon} alt="stackover flow" className="login-logo"></img>}
                <form onSubmit={handleSubmit}>

                    {isSignUp && (
                        <label htmlFor="name"  >
                            <h4>Display name</h4>
                            <input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} />
                        </label>
                    )}
                    <label htmlFor="email" >
                        <h4>Email</h4>
                        <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 className="login-password">Password</h4>
                            <h4>{!isSignUp && <p className="forgot-password" style={{ color: '#007ac6', fontSize: '13px' }}>forgot password ?</p>}</h4>
                        </div>
                        <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                        {isSignUp && <p style={{ color: '#666767', fontSize: '13px' }}>Password must contains at least eight<br />characters,including 1 letter and 1 <br />number</p>}
                    </label>
                    {isSignUp && (
                        <label htmlFor="check">
                            <input type="checkbox" name="check" id="check" />
                            <p className="check-input" style={{ fontSize: '13px' }}>Opt-in to receive occasional,<br />product updatess, user research invitations<br />company announcements and digests</p>
                        </label>
                    )}
                    <button type="submit" className="auth-btn">{isSignUp ? 'signup' : 'login'}</button>
                    {
                        isSignUp && (
                            <p style={{ color: '#666767', fontSize: '13px' }}>By clicking "Sign up", you agree to our  <span style={{ color: '#007ac6' }}>terms of</span><br /><span style={{ color: '#007ac6' }}>Service, </span> <span style={{ color: '#007ac6' }}> privacy policy </span> and <span style={{ color: '#007ac6' }}>cokkie policy</span> </p>
                        )
                    }
                </form>
                <p>{isSignUp ? 'already have a account ?' : "Don't you have an account ?"}
                    <button type="submit" className="handle-switch-btn" onClick={handleSwitch}>{isSignUp ? 'Login' : 'Signup'}</button></p>
            </div>
        </section>
    )
}

export default Auth