import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function RestPass() {
  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const send = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://${process.env.REACT_APP_API_KEY}/api/auth/reset-password`,
        {
          code: code,
          password: value,
          passwordConfirmation: value,
        }
      )
      .then((res) => {
        setMessage("Your password has been reset.");
        console.log(res);
      })
      .catch((error) => {
        setMessage("An error occurred, try again");
        console.log(error);
      });
  };
  console.log(value);
  return (
    <div className="h-screen bg-orange-400">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add a new password for your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h2 className=" text-center text-sm text-fuchsia-50 ">
                {message}
              </h2>
            </div>
            <div>
              <button
                type="submit"
                onClick={send}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RestPass;
