import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {

    let location = useLocation();
    let history = useHistory();

    const [user, setUser] = useState(null);

    const getUser = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            setUser(null);
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/getuser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    }
                }
            );

            const data = await response.json();

            if (response.ok) {
                setUser(data);
            } else {
                localStorage.removeItem('token');
                setUser(null);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [location.pathname]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        history.push('/login');
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    iNotebook
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/" ? "active" : ""
                                }`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/about" ? "active" : ""
                                }`}
                                to="/about"
                            >
                                About
                            </Link>
                        </li>

                    </ul>

                    <div className="d-flex align-items-center">

                        {user ? (
                            <>
                                <span className="text-light me-3">
                                    Hello, {user.name} 👋
                                </span>

                                <button
                                    className="btn btn-primary"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="btn btn-primary mx-1"
                                    to="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="btn btn-primary mx-1"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </>
                        )}

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar