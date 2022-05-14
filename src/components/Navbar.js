

export default function Navbar() {
    return(
        <div >
            <div className="bg-black text-white">
                <nav className="flex justify-between max-w-7xl mx-auto py-6">
                    <div className=" ">
                        <ul>
                            <li>MyLocale</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex justify-between space-x-8">
                            <li>Home</li>
                            <li>Users</li>
                            <li>My Profile</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}