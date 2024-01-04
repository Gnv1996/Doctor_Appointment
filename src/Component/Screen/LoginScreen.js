import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

function LoginScreen() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Successfully !..",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container m-auto flex flex-col justify-center items-center w-[100%] h-[100vh]">
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-white-800 dark:border-gray-700">
        <div className="text-center py-5">
          <h1 className="text-blue-400 text-5xl font-bold">Claraly</h1>
          <p className="text-gray-500 py-2">Covenant Clinics</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-gray-900">
            Please log in using your employee credentials
          </h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="doctor_1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-900 dark:text-gray-900">
            Not registered?{" "}
            <Button
              onClick={handleRegister}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
