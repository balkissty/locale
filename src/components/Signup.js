import { Link } from "react-router-dom";

 export default function Signup(){
    return(
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-24">
            <h1 className="text-xl text-blue-600 mt-4 mb-6">Create a free Account</h1>
            <form>
                <div className="form-group mb-6">
                    <label>
                        <p>Email</p>
                        <input type="text" 
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
                        aria-describedby="emailHelp" placeholder="Enter email"
                        />
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <p>Password</p>
                        <input type="password" 
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
                        placeholder="Password"
                        />
                    </label>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="Check" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="Check">I Accept the Terms of Use</label>
                    </div>
                </div>
                <div>
                    <button className="
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
                    ease-in-out
                    " type="submit">Register</button>
                </div>
                <p className="text-gray-800 mt-6 text-center">Already a user? <Link to="/login"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
                </p>
            </form>
        </div>
    )
 }