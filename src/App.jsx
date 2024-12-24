// Import necessary modules
import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUser(data?.results[0]);
      } catch (error) {
        console.log("Error fetching user Data: ", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex flex-col sm:flex-row justify-center items-center bg-white shadow-lg rounded-lg border border-gray-300 p-[45px] w-full max-w-2xl space-x-11">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <img
            src={user?.picture?.large}
            alt="User"
            className="w-40 h-40 rounded-md border-4 border-blue-500 mx-auto sm:mx-0"
          />
        </div>
        <div className="sm:ml-6 ">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.name?.first} {user?.name?.last}
          </h2>
          <div className="text-lg text-gray-600 space-y-2 mt-2">
            <p className=" capitalize ">{user?.gender}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
            <p>
              {user?.location?.city}, {user?.location?.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
