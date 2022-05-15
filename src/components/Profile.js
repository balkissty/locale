
export default function Profile() {
    return(
        <div>
            <div className="max-w-4xl mx-auto mt-24">
                <p className="text-3xl pb-6">
                    Edit Your Profile
                </p>
                <form className="grid">
                    <input type="text" placeholder="Enter new password" className="py-1 pl-2 w-7/12 border-solid border-2 border-gray-500 rounded" />
                    <button type="submit" className="mt-5 w-1/12 bg-pink-600 text-white font-medium border-0 p-2 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}