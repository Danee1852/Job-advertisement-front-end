import { useState } from 'react';
import './SignInForm.css';
import {Link} from "react-router-dom"



export default function SignInForm() {

    const [formSignInData, setFormSignInData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        setFormSignInData(prevFormSignInData => {
            return {
                ...prevFormSignInData,
                [event.target.name]: event.target.value
            }
            
        })
    }

    const handleSubmit = (event) => {
        
        event.preventDefault()
        
        
    }
    

    return (
        <div className="signin-container">
            <div className="signin-wrapper">
                <div className="signin-title">
                    <h2>Login</h2>
                    </div>
                <form onSubmit ={handleSubmit} className="signin-form-wrapper">
                   
                    <div className="email-wrapper">
                        <label className="signin-form-label">Email</label>
                        <input 
                        className="signin-form-input"
                        type="email"
                        name="email"
                        value={formSignInData.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="password-wrapper">
                        <label className="signin-form-label">Password</label>
                        <input 
                        className="signin-form-input"
                        type="password"
                        name="password"
                        value={formSignInData.password}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button className="submitbutton">Sign in</button>
                    </div>
                    <div className="signin-form-footer">
                        <p>Don't have an Account ?</p>
                        <Link to="/signup"><p className="signup-shortcut">Sign up</p></Link>
                    </div>
                </form>

            </div>

        </div>
    )
}