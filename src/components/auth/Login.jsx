import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slice/auth/authSlice";
import { useLoginMutation } from "../../store/slice/auth/authApiSlice";

import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmitHandler = async (data) => {
    try {
      const userData = await login(data).unwrap();
      dispatch(setCredentials(userData));
      navigate("/");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col justify-center items-center gap-5 mt-10"
    >
      <input
        className="rounded-md px-3 text-md py-2 placeholder:font-semibold font-semibold"
        type="text"
        name="email"
        placeholder="User Name"
        {...register("email")}
      />
      <div className="w-full flex bg-white pr-2 rounded-md text-md  ">
        <input
          className="px-3 py-2 rounded-md placeholder:font-semibold font-semibold"
          type={show ? "text" : "password"}
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <button
          type="submit"
          className="bg-primary w-full p-2 text-md  text-white font-semibold rounded-md"
        >
          sign in
        </button>
        <div className="text-sm">OR</div>
        <div>
          new here?
          <Link className="text-primary font-semibold" to="/auth/register">
            Sign Up
          </Link>
        </div>
      </div>
      <Toaster />
    </form>
  );
};

export default Login;
