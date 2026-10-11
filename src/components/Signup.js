import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {

    const history = useHistory();

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/createuser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                }
            );

            const json = await response.json();

            if (response.ok && json.authtoken) {

                // Save JWT token
                localStorage.setItem('token', json.authtoken);

                // Go to Home
                history.push('/');

            } else {

                // Show backend error
                if (json.error) {
                    setError(json.error);
                } else if (json.errors) {
                    setError(json.errors[0].msg);
                } else {
                    setError("Something went wrong");
                }
            }

        } catch (error) {
            setError("Unable to connect to server");
        }
    };


    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className="container my-3">

            <h2>Create an account</h2>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">

                    <label htmlFor="name" className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={onChange}
                        minLength={3}
                        required
                    />

                </div>


                {/* Email */}
                <div className="mb-3">

                    <label htmlFor="email" className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        required
                    />

                </div>


                {/* Password */}
                <div className="mb-3">

                    <label htmlFor="password" className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                        minLength={5}
                        required
                    />

                </div>


                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Sign Up
                </button>

            </form>

        </div>
    );
};

export default Signup;