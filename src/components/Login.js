import '../App.css'
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";


async function loginUser(credentials) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(err => console.log(err))
 }

export default function Login( { setToken, token }) {
  const[inputs, setInputs] = useState( {} );
  const navigate = useNavigate();

  useEffect( () => {
    console.log(token)
    if(token) {
      navigate('/')
    }
  },[navigate, token]);
 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await loginUser({
        email: inputs.email,
        password: inputs.password
      });
      setToken(token);
      navigate('/')
    } catch (error) {
      console.log(error, "error")
    }
  }

  




    return(
        <div className=''>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-24">
          <h1 className="text-xl text-blue-600 mt-4 mb-6">Login to your Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                    <label htmlFor="InputEmail" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input 
                        required
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={inputs.email || ""}
                        className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="inputEmail"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="Password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input
                        required
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={inputs.password || ""}
                        className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="inputPassword"
                        placeholder="Password" />
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="Check" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="Check">Remember me</label>
                    </div>
                    <a href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                        password?
                    </a>
                </div>
                    <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Login</button>
                    <p className="text-gray-800 mt-6 text-center">Not a user? <Link to="/signup"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
            </form>
        </div>
        </div>
    )
}
loginUser.propTypes = {
  setToken: PropTypes.func.isRequired
}