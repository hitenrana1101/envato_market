import React from "react";
import { useNavigate } from "react-router-dom";   // NEW
import sideimg from "../assets/auth-side-bg.png";

const Form = () => {
  const navigate = useNavigate();               // NEW

  const handleSignIn = (e) => {
    e.preventDefault();                         // page reload na ho
    // yahan future me API / validation laga sakta hai
    navigate("/dashboard");                     // success ke baad next page
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 bg-white">
      {/* Left section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        {/* form wrap so onSubmit chale */}
        <form onSubmit={handleSignIn} className="w-full max-w-md lg:ml-24">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#171717]">
            Welcome back!
          </h1>

          <p className="mt-2 text-sm md:text-base text-[#525252]">
            Please enter your credentials to sign in!
          </p>

          {/* Email */}
          <div className="mt-6">
            <p className="text-[#737373] font-medium text-sm mb-2">Email</p>
            <input
              type="email"
              placeholder="admin-01@ecme.com"
              className="h-12 w-full bg-[#f5f5f5] rounded-[12px] px-4 text-sm outline-none"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <p className="text-[#737373] font-medium text-sm mb-2">Password</p>
            <input
              type="password"
              placeholder="123Qwe"
              className="h-12 w-full bg-[#f5f5f5] rounded-[12px] px-4 text-sm outline-none"
            />
          </div>

          {/* Forgot password */}
          <div className="mt-2 mb-6 flex justify-start">
            <button
              type="button"
              className="text-sm font-medium text-[#171717] underline"
            >
              Forgot password
            </button>
          </div>

          {/* Sign in button */}
          <button
            type="submit"   // IMPORTANT
            className="h-12 w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-medium rounded-[12px] text-sm md:text-base"
          >
            Sign In
          </button>

          {/* Divider text */}
          <div className="text-center mt-8">
            <p className="text-[#171717] text-sm font-medium">
              or continue with
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex mt-5 gap-3">
            <button
              type="button"
              className="flex-1 border border-[#2563EB] h-12 rounded-[12px] text-[#525252] font-medium text-sm"
            >
              Google
            </button>
            <button
              type="button"
              className="flex-1 border border-[#2563EB] h-12 rounded-[12px] text-[#525252] font-medium text-sm"
            >
              Github
            </button>
          </div>

          {/* Sign up text */}
          <p className="text-center mt-6 text-sm text-[#525252]">
            Don&apos;t have an account yet?{" "}
            <span className="text-[#2563EB] font-medium cursor-pointer">
              Sign up
            </span>
          </p>
        </form>
      </div>

      {/* Right image section */}
      <div className="w-full mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={sideimg}
          alt="Auth side"
          className="w-full max-w-xl lg:w-[820px] lg:h-[650px] rounded-[24px]"
        />
      </div>
    </div>
  );
};

export default Form;
