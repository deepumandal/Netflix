import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { LOGO } from "../utils/constants";
import { logoutUserApi } from "../api/auth.api";
import { logOutUser } from "../reduxStore/authSlice";
import { handleGptPage } from "../reduxStore/GptSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);
  const { isGptPage } = useSelector((store) => store.gpt);
  const handleSignout = (e) => {
    e.preventDefault();
    logoutUserApi().then(() => {
      dispatch(logOutUser());
    });
  };
  const onClickGptPage = (e) => {
    e.preventDefault();
    dispatch(handleGptPage());
  };
  return (
    // bg-gradient-to-b from-[#000000]
    <div className="z-10 fixed w-full flex justify-between items-center  px-2 py-1 sm:px-2 sm:py-1 md:px-8 md:py-3   ">
      <div>
        <img src={LOGO} className=" w-20  md:w-32" />
      </div>
      <div className="gap-1 sm:gap-2 md:gap-3 flex items-center">
        <button
          onClick={onClickGptPage}
          className="bg-red-600 outline-none text-xs  px-2 py-1 h-fit      sm:text-sm     md:px-3 md:py-2 text-white font-bold tracking-wide rounded-lg"
        >
          {isGptPage ? "HomePage" : "Search on Gpt"}
        </button>
        <button
          onClick={handleSignout}
          className="bg-red-700 outline-none text-xs  px-2 py-1 h-fit      sm:text-sm     md:px-3 md:py-2 text-white font-bold tracking-wide rounded-lg"
        >
          Sign out{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
