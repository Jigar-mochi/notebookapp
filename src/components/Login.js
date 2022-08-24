import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'



function Login() {
    const [cred, setCred] = useState({ email: "", password: "" })
    const navigate = useNavigate();



    const handleclick = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:800/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });
        const json = await response.json()

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else {
            alert("Invalid credentials");
        }
    }
    const change = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <div className='box pt'>
            <div className='bgn container col-md-3'>
                <form onSubmit={handleclick}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label pt-4">Email address</label>
                        <input type="email" className="form-control" onChange={change} id="email" name='email' value={cred.email} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={change} value={cred.password} name='password' id="password" />
                    </div>
                    <button type="submit" className="btn btn-outline-danger">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Login