import { React, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Navbar() {
    let location = useLocation()
    useEffect(() => {
        // console.log(location.pathname)
        // eslint-disable-next-line
    }, [location]);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')

        navigate('/login')
    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>{localStorage.getItem('token')?
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/textedit" ? "active" : ""}`} to="/textedit">Textedit</Link>
                                </li>
                            </ul>
                        </div>:''}
                    </div>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link to="/login" className="btn btn-info mx-3">Login</Link>
                        <Link to="/Signup" className="btn btn-info">Signup</Link>
                    </form> : <button type="button" onClick={logout} className="btn btn-info">Logout</button>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar