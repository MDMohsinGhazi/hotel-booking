import { NavLink, Outlet } from "react-router-dom";
import { GiCampingTent } from "react-icons/gi";
const Auth = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <div className="shadow-md">
        <div className="bg-primary text-white text-2xl p-10 rounded-t-lg">
          <NavLink
            to="/"
            className="flex justify-center items-center text-4xl font-semibold gap-2"
          >
            <GiCampingTent size={48} />
            <h1>Toure</h1>
          </NavLink>
          <h1>Start your journey,Today.</h1>
        </div>
        <div className="bg-secondary p-5 rounded-b-lg">
          <div className="flex items-center justify-around text-primary text-2xl pb-5">
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : ""
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : ""
              }
            >
              Sign Up
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Auth;
