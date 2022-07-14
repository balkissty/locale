import React, { useState } from "react";
export default function Profile() {
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword('');
        alert(`Your Password has been changed to: ${password}`)
      }


    return(
        <div className="container mx-auto block bg-white max-w-lg px-4">
            <div className=" mt-24">
                <p className="text-3xl pb-6">
                    Edit Your Profile
                </p>
                <form className="grid" onSubmit={handleSubmit}>
                    <input type="password" placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control block
                        w-full
                        mb-6
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <button type="submit" className="
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
                    ease-in-out">Change Password</button>
                </form>
            </div>
        </div>
    )
}