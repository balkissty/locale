import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState} from "react";




async function loginUser(credentials) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login( { setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


    return(
        <div>
          <h1 className="text-3xl mt-6 max-w-4xl mx-auto">Login</h1>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-24">

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
                }}
                >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                
                }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <label htmlFor="InputEmail" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input 
                            type="email"
                            name="email"
                            onChange={e => setUserName(e.target.value)}
                            onBlur={handleBlur}
                            value={values.email}
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
                            {errors.email && touched.email && errors.email}
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="Password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value) && handleChange}
                            onBlur={handleBlur}
                            value={values.password}
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
                            {errors.password && touched.password && errors.password}
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
                        <button type="submit" disabled={isSubmitting} className="
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
                        <p className="text-gray-800 mt-6 text-center">Not a user? <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
                        </p>
                </form>
                )}
                </Formik>
            </div>
        </div>
    )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}