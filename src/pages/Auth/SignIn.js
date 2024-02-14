import React, { useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';


import toastr from 'toastr';
import 'toastr/build/toastr.css';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            toastr.warning("Email address is invalid", "Warning");
            return;
        }

        const userData = {
            email: email,
            password: password
        }

        axios.post(process.env.REACT_APP_ENDPOINT_URL + '/auth/signin', userData).then(res => {
            if (res.data.status == "success") {
                toastr.success(res.data.message, "Success");
                // dispatch(setUser(res.data.user))
                navigate("../");
            }

            else if (res.data.status == "invalid") {
                toastr.warning(res.data.message, "Warning");
            }

            else if (res.data.status == "error") {
                toastr.error(res.data.message, "Error");
            }

            else {
                toastr.error("Server Error", "Error");
            }
        })
    }

    return (
        <div className="bg-white p-20 rounded-lg shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to Soda PDF
                </h2>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <NavLink to="../signup" className="cursor-pointer font-semibold leading-6 text-blue-600 hover:text-blue-500">
                    Sign up
                </NavLink>
            </p>

            <div className="relative bg-inherit mt-5">
                <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="peer bg-transparent h-10 w-72 rounded text-black-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email address" /><label htmlFor="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email address</label>
            </div>

            <div className="relative bg-inherit mt-5">
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="peer bg-transparent h-10 w-72 rounded text-black-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" /><label htmlFor="password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Password</label>
            </div>

            <div className="relative bg-inherit mt-2 ">
                <NavLink to={""} className="hover:underline text-blue-600">Forgot Password?</NavLink>
            </div>

            <div className="relative bg-inherit mt-5">
                <button className="bg-blue-500 uppercase w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
                    Sign in
                </button>
            </div>
        </div>
    )
}