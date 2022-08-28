import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slice/auth/authSlice";
import banner from "../../assets/images/banner.jpg";
import Search from "./Search";
const Hero = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <section className="w-full">
      <div className="relative ">
        <img
          className="rounded-xl h-[480px] w-full object-cover"
          src={banner}
          alt="banner"
        />
        <div className="absolute inset-0 rounded-xl py-20 px-32 bg-gradient-to-r from-green-300 via-green-300/20 to-transparent ">
          <h1 className="text-6xl font-bold capitalize">
            <div>enjoy your</div>
            <div>dream vacation</div>
          </h1>
          <h2 className="mt-5 text-2xl font-semibold">
            It's a big world out there, go explore
          </h2>
          <h2 className="text-xl pb-5 font-semibold">
            We always make our customers happy by providing many choices.
          </h2>
          {user ? null : (
            <Link
              to="auth/login"
              className="bg-primary px-6 py-2 font-semibold rounded-lg text-white"
            >
              Sign in/Register
            </Link>
          )}
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Hero;
