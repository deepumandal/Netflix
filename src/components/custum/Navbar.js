import React from "react";
import { logoutUserApi } from "../../api/auth.api";
import { logOutUser } from "../../reduxStore/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";

const Navbar = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const handleSignout = () => {
    logoutUserApi().then(() => {
      dispatch(logOutUser());
    });
  };
  return (
    <div className="z-10 fixed w-full flex justify-between items-center px-8 py-3 bg-gradient-to-b from-[#000000]  bg-opacity-10">
      <div>
        <img src={LOGO} className="w-44" />
      </div>
      <div>
        <button
          onClick={handleSignout}
          className="bg-red-700 px-4 py-2 text-white font-semibold tracking-wide rounded-lg"
        >
          Sign out{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
