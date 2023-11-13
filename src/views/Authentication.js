import React, { useState } from "react";

const backgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const Login = () => {
  const [isAlreadyUser, setIsAlreadyUser] = useState(false);

  const handleAddNewUser = () => {
    setIsAlreadyUser((prev) => !prev);
  };
  return (
    <div className="w-full h-full">
      <div>
        <img src={backgroundImage} className="absolute w-full h-full" />
        <div class="absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"></div>
      </div>

      <div>
        <img
          className="absolute w-56"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {/* form validiation */}
      <div className="flex w-full h-full justify-center items-center">
        <div className="bg-[#000000c9] p-10 z-10 rounded-xl w-3/12 h-fit">
          <form className="w-full ">
            <h1 className="text-white text-left font-semibold text-2xl my-4 py-2">
              {isAlreadyUser ? "Sign up" : "Sign in"}
            </h1>
            {isAlreadyUser && (
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full h-12 px-3 my-3 cursor-pointer outline-none opacity-1 rounded-lg"
              />
            )}
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full h-12 px-3 my-3 cursor-pointer outline-none opacity-1 rounded-lg"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-3 my-3 h-12 outline-none cursor-pointer rounded-lg"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold my-3 w-full h-12 rounded-lg"
            >
              Submit
            </button>

            <p className="text-gray-600 my-5 cursor-pointer">
              New to Netflix?{" "}
              <span className="text-white " onClick={handleAddNewUser}>
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