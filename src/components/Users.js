import React, {useEffect, useState} from "react";


export default function Users(){
    const [contacts, setContacts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] =useState(1)

  const fetchData = (page) => {
    setIsLoading(true)
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setContacts(data.data)
      })
  }

  const handleNextPage = () => {
   // () => setPage(page + 1)
   if (page < 2 ){
        setPage(page + 1)
   }
  }

  const handlePreviousPage = () => {
      // () => setPage(page - 1)
    if (page > 1){
        setPage(page - 1)
    }
  }

  useEffect(() => {
    fetchData(page)
  }, [page])

    return(
        <div>
            <div className="max-w-7xl mx-auto">
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <div class="input-group mt-10 justify-end flex items-stretch w-full mb-4">
                        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        <button class="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                    </div>
                </div>

                <div>
                    <p className="text-3xl mt-6">Users</p>
                </div>

                <div className="mt-10">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                <thead class="border-b">
                                    <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        S/N
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        First Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Last Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Avatar
                                    </th>
                                    </tr>
                                </thead>
                                {isLoading && <p>Loading...</p>}
                                {contacts.length > 0 && (
                                <tbody>
                                    {contacts.map((user) => (
                                        <tr class="border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.first_name}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.last_name}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.email}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img className="border-2 rounded-full" src={user.avatar} alt="avatar" />
                                            </td>
                                        </tr>
                                    ) )}
                                    
                                </tbody>
                                )}
                                </table>
                            </div>
                            </div>
                            <button onClick={handlePreviousPage} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </button>
                            <button onClick={handleNextPage} class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}