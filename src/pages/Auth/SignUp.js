import React, { useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

export default function SignUp() {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        var registerData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            toastr.warning("Email address is invalid", "Warning");
            return;
        }

        axios.post(process.env.REACT_APP_ENDPOINT_URL + '/auth/signup', registerData).then(res => {
            if (res.data.status == "success") {
                toastr.success(res.data.message, "Success");
                navigate("../sign-in");
            }

            else if (res.data.status == "exist") {
                toastr.success(res.data.message, "Warning");
            }

            else {
                toastr.success("Server Error", "Error");
            }
        })
    }

    return (
        <div className="bg-white p-20 rounded-lg shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an account
                </h2>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <NavLink to="../signin" className="cursor-pointer font-semibold leading-6 text-blue-600 hover:text-blue-500">
                    Sign in
                </NavLink>
            </p>

            <div className="relative bg-inherit mt-5">
                <input onChange={(e) => setFirstname(e.target.value)} type="text" id="firstname" className="peer bg-transparent h-10 w-72 rounded text-black-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="First name" /><label htmlFor="firstname" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">First name</label>
            </div>

            <div className="relative bg-inherit mt-5">
                <input onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" className="peer bg-transparent h-10 w-72 rounded text-black-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Last name" /><label htmlFor="lastname" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Last name</label>
            </div>

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
                <button className="bg-blue-500 uppercase w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleRegister}>
                    Create Account
                </button>
            </div>
        </div>
    )
}