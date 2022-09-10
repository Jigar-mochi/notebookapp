import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

function Signup() {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleclick = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:800/api/auth/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/succ");
        }
        else {
            alert("Please fill in valid formate");
        }
    }
    return (
        <div className='app'>
            <form className='form-container' onSubmit={handleclick}>
                <h1 className='mb-3'>Signup here</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={onchange} minLength={5} name='name' value={user.name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onchange} minLength={5} name='email' value={user.email} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onchange} minLength={5} name='password' value={user.password} required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox" required />
                    <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                </div>
                <button disabled={user.name.length < 5 || user.email.length < 5} type="submit" className="btn btn-primary">signup</button>
            </form>
        </div>
    )
}

export default Signup