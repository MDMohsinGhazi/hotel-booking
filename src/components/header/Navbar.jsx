import React from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { logOut } from "../../store/slice/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { GiCampingTent } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { selectCurrentUser } from "../../store/slice/auth/authSlice";

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const { pathname } = useLocation();

  const logoutHandler = () => {
    dispatch(logOut());
    nevigate("/auth/login");
  };

  return (
    <header
      className={
        pathname === "/"
          ? `flex justify-between items-center px-10 pt-5 font-semibold text-md text-primary`
          : `flex justify-between px-10 pt-5 pb-2 font-semibold text-md bg-primary text-white`
      }
    >
      <Link
        to="/"
        reloadDocument
        className="flex justify-center items-center text-2xl "
      >
        <GiCampingTent size={48} /> <span>Tour</span>
      </Link>
      <div className="flex justify-center items-center space-x-10">
        <div className="flex space-x-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/booking">My Booking</NavLink>
        </div>
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div>{user}</div>
            <button onClick={logoutHandler}>
              <RiLogoutBoxRLine />
            </button>
          </div>
        ) : (
          <NavLink
            className={
              pathname === "/"
                ? `border-2 border-slate-500 px-4 py-1 rounded-md`
                : `border-2  px-4 py-1 rounded-md`
            }
            to="/auth/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
