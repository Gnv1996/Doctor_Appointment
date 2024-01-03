import React from "react";

function LoginScreen() {
  return (
    <div className="container m-auto flex flex-col justify-center items-center w-[100%] h-[100vh]">
      <div className="text-center py-5">
        <h1 className="text-blue-400 text-5xl font-bold">Claraly</h1>
        <p className="text-gray-500 py-2">Covenant Clinics</p>
      </div>
      <div className="text-center mb-3 ">
        <h6 className="text-1xl">
          Please log in using your employee credentials
        </h6>
      </div>

      <div class="">
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="doctor_1"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="*******"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button className="bg-blue-400 w-full py-3 rounded text-white">
          Log In
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
