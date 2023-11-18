import React from "react";
import { logoutUserApi } from "../../api/auth.api";
import { logOutUser } from "../../reduxStore/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";
import { handleGptPage } from "../../reduxStore/GptSlice";

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
    <div className="z-10 fixed w-full flex justify-between items-center px-8 py-3 bg-gradient-to-b from-[#000000]  bg-opacity-10">
      <div>
        <img src={LOGO} className="w-32" />
      </div>
      <div className="gap-4 flex">
        <button
          onClick={onClickGptPage}
          className="bg-red-700 outline-none px-3 py-2 text-white font-bold tracking-wide rounded-lg"
        >
          {isGptPage ? "HomePage" : "Search on Gpt"}
        </button>
        <button
          onClick={handleSignout}
          className="bg-red-700 outline-none px-3 py-2 text-white font-bold tracking-wide rounded-lg"
        >
          Sign out{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
