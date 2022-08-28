import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/slice/auth/authSlice";
import Footer from "./header/Footer";
import Navbar from "./header/Navbar";

const PageLayout = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return (
    <>
      <Navbar />
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/auth/login" state={{ from: location }} replace />
      )}
      <Footer />
    </>
  );
};

export default PageLayout;
