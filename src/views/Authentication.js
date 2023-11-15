import React, { useRef, useState } from "react";
import { getValidatedInputs } from "../utils/getValidatedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateNewUserApi, signInUserApi } from "../api/auth.api";
import {
  UserLoginSignIn,
  authLoading,
  authError,
} from "../reduxStore/authSlice/index";
import { LOGO, backgroundImage } from "../utils/constants";

const Login = () => {
  const [isAlreadyUser, setIsAlreadyUser] = useState(true);
  // const [error, setError] = useState("");
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const dispatch = useDispatch();
  const loc = useLocation();

  const { errorMessage, loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleAddNewUser = () => {
    setIsAlreadyUser((prev) => !prev);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const email = userEmail.current?.value;
    const password = userPassword.current?.value;

    // validation check for password and email
    const inputsError = getValidatedInputs(email, password);

    if (inputsError) return dispatch(authError(inputsError)); // to immidiate stop the if inputs are wrong
    dispatch(authLoading());
    if (isAlreadyUser) {
      signInUserApi({ email, password })
        .then((response) => {
          const { displayName, stsTokenManager, phoneNumber, photoURL, uid } =
            response.user;
          const { refreshToken, accessToken, expirationTime } = stsTokenManager;
          dispatch(
            UserLoginSignIn({
              displayName,
              userToken: { refreshToken, accessToken, expirationTime },
              phoneNumber,
              photoURL,
              uid,
              email,
            })
          );
          navigate(loc.state?.pathname, { replace: true });
        })
        .catch((error) => {
          dispatch(authError(error.message));
        });
    } else {
      CreateNewUserApi({ email, password })
        .then((response) => {
          const { displayName, stsTokenManager, phoneNumber, photoURL, uid } =
            response.user;
          const { refreshToken, accessToken, expirationTime } = stsTokenManager;
          dispatch(
            UserLoginSignIn({
              displayName,
              userToken: { refreshToken, accessToken, expirationTime },
              phoneNumber,
              photoURL,
              uid,
              email,
            })
          );
          navigate(loc.state?.pathname, { replace: true });
        })
        .catch((error) => {
          dispatch(authError(error.message));
        });
    }
  };

  return (
    <div className="w-full h-full">
      <div>
        <img src={backgroundImage} className="absolute w-full h-full" />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"></div>
      </div>

      <div>
        <img className="absolute w-48" src={LOGO} alt="logo" />
      </div>
      {/* form validiation */}
      <div className="flex w-full h-full justify-center items-center">
        <div className="bg-[#000000a9] p-10 z-10 rounded-xl w-3/12 h-fit">
          <form className="w-full " onSubmit={onSubmit}>
            <h1 className="text-white text-left font-semibold text-2xl my-4 py-2">
              {isAlreadyUser ? "Sign in" : "Sign up"}
            </h1>
            {!isAlreadyUser && (
              <input
                ref={userName}
                type="text"
                placeholder="Enter your Name"
                className="w-full h-12 px-3 my-3  bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"
              />
            )}
            <input
              ref={userEmail}
              type="email"
              placeholder="Enter your Email"
              className="w-full h-12 px-3 my-3 bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"
            />
            <input
              ref={userPassword}
              type="password"
              placeholder="Enter your Password"
              className="w-full px-3 my-3 h-12  bg-gray-500 text-white  outline-none cursor-pointer rounded-lg"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold my-3 w-full h-12 rounded-lg"
            >
              {loading ? "Loading..." : "Submit"}
            </button>

            <p className=" text-red-500 font-semibold   cursor-pointer">
              {errorMessage}{" "}
            </p>
            <p className=" text-white  my-5 cursor-pointer">
              New to Netflix?{" "}
              <span className="hover:text-red-500" onClick={handleAddNewUser}>
                Sign up now.
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
