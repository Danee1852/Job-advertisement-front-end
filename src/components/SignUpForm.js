import { useState } from 'react';
import './SignUpForm.css';


export default function SignUpForm() {

    const [formSignUpData, setFormSignUpData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const handleChange = (event) => {
        setFormSignUpData(prevFormSignUpData => {
            return {
                ...prevFormSignUpData,
                [event.target.name]: event.target.value
            }
            
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // to do send data into backend 
    }
    

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-title">
                    <h2>Create Account</h2>
                    </div>
                <form className="signup-form-wrapper">
                    <div className="firstname-wrapper">
                        <label className="signup-form-label">First Name</label>
                        <input
                        className="signup-form-input" 
                        type="text"
                        name="firstName"
                        value={formSignUpData.firstName}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="lastname-wrapper">
                        <label className="signup-form-label">Last Name</label>
                        <input 
                        className="signup-form-input"
                        type="text"
                        name="lastName"
                        value={formSignUpData.lastName}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="email-wrapper">
                        <label className="signup-form-label">Email</label>
                        <input 
                        className="signup-form-input"
                        type="text"
                        name="email"
                        value={formSignUpData.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="password-wrapper">
                        <label className="signup-form-label">Password</label>
                        <input 
                        className="signup-form-input"
                        type="text"
                        name="password"
                        value={formSignUpData.password}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="submitbutton">Sign Up</button>
                    </div>
                </form>

            </div>

        </div>
    )
}