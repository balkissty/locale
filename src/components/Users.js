import React from "react";

export default function Users(){
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
  
  React.useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        const {name} = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      });
  }, []);
    return(
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-end max-w-5xl mx-auto">
                    <form class="flex justify-between border mt-24 text-sm">
                        <input class="text-gray-400 py-2 px-2 text-lg" type="text" placeholder="Search a User" />
                        <span class="flex items-center font-bold">
                            <button class="text-lg text-gray-400 bg-gray-200 py-3 px-6">Search</button>
                        </span>
                    </form>
                </div>

                <div>
                    <p className="text-3xl mt-6">Users</p>
                </div>

                <div>
                     Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
                </div>

            </div>
        </div>
    )
}