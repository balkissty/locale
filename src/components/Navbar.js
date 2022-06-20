import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div >
            <div className="bg-black text-white">
                <nav className="flex justify-between max-w-7xl mx-auto py-6">
                    <div className="text-md ">
                        <ul>
                        <Link to="/">MyLocale</Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex justify-between space-x-8">
                            <Link to="/">Home</Link>
                            <Link to="/users">Users</Link>
                            <Link to="/Profile">My Profile</Link>
                            <Link to="">Logout</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}