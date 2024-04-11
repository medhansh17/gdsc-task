import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer text-black"
        onClick={() => signIn("google")}
      >
        <FcGoogle className="text-[30px] " />
        Sign-In with Google
      </div>
    </div>
  );
};

export default Login;
