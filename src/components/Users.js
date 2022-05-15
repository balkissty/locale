
export default function Users(){
    return(
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-end max-w-5xl mx-auto">
                    <form class="flex justify-between border mt-24 text-sm">
                        <input class="text-gray-400 py-2 text-grey-darkest px-2 text-lg" type="text" placeholder="Search a User" />
                        <span class="flex items-center bg-grey-100 border-0 font-bold">
                            <button class="text-lg text-gray-400 bg-gray-200 py-3 px-6">Search</button>
                        </span>
                    </form>
                </div>

                <div>
                    <p className="text-3xl mt-6">Users</p>
                </div>
            </div>
        </div>
    )
}