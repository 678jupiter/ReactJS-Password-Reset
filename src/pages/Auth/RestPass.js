import axios from "axios";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { css } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import Logo from "../../../src/images/logo.png";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: "#6721D3";
`;

function RestPass() {
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  let [loading] = useState(true);
  let [color] = useState("#ffffff");
  const isFormValid = () => {
    if (passValue.password === "") {
      setMessage("All fields are required!");
      setSubmitting(false);
      return false;
    }
    if (passValue.password.length < 6) {
      setMessage("Password should not be less than six characters.");
      setSubmitting(false);
      return false;
    }

    return true;
  };

  const send = (event) => {
    event.preventDefault();
    setMessage("");
    if (!isFormValid()) {
      return;
    }
    setSubmitting(true);
    setMessage("");
    axios
      .post(
        `https://${process.env.REACT_APP_API_KEY}/api/auth/reset-password`,
        {
          code: code,
          password: passValue.password,
          passwordConfirmation: passValue.password,
        }
      )
      .then(() => {
        //  console.clear();
        setMessage("Your password has been reset.");
        setSubmitting(false);
      })
      .catch(() => {
        setMessage("An error has occurred, try again");
        setSubmitting(false);
      });
  };
  // console.clear();

  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  //
  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    // <div className="h-screen bg-orange-400">
    <div className="h-screen bg-indigo-600">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-40 w-auto" src={Logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-50">
              Password reset.
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <div className="password_2 block pt-6 relative">
                  <div className="eye_div">
                    <input
                      className="input block border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm focus:border-pitch-black  py-3 px-3 w-full  "
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={passValue.password}
                      placeholder="Password"
                    />
                    <div
                      className="icon_button absolute right-4 top-10"
                      onClick={handleClickShowPassword}
                    >
                      {passValue.showPassword ? (
                        <EyeIcon className="h-6 font-extralight" />
                      ) : (
                        <EyeOffIcon className="h-6 font-extralight" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className=" text-center text-sm text-fuchsia-50 ">
                {message}
              </h2>
            </div>
            <div>
              {submitting ? (
                <ClimbingBoxLoader
                  color={color}
                  loading={loading}
                  css={override}
                  size={30}
                />
              ) : (
                // <div className="h-screen bg-orange-400">
                <button
                  type="submit"
                  onClick={send}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <!-- Heroicon name: solid/lock-closed --> */}
                    <svg
                      className="h-5 w-5  text-white group-hover:text-white"
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
              )}
            </div>
          </form>

          <div className="login_page">
            <main className="login_main max-w-lg mx-auto ">
              <div className="login_form pt-16">
                <form action=""></form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RestPass;
