"use client";
import type { Metadata } from "next";
import type { Message } from "@/types";
import { handleFormSubmit } from "@/server-actions";
import { useActionState } from "react";

// export const metadata: Metadata = {
//   title: "Register",
//   description: "Register for an account",
//   openGraph: {
//     title: "Register",
//     description: "Register for an account",
//   },
// };

const page = () => {
  const initState: Message = { type: "", message: "", status: 0 };
  const [message, action, isPending] = useActionState(handleFormSubmit, initState);
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 via-grey-50 to-green-100 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center rounded-2xl p-10 bg-white w-120 mx-auto shadow-xl/10">
        <h3 className="text-3xl mb-2 font-bold text-slate-800">Sign up</h3>
        <form action={action} className="flex flex-col gap-7 w-full">
          <div>
            <label htmlFor="email" className="text-sm text-slate-800">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Please enter a valid emailadress..."
            />
            {message.type === "errorEmail" && <p className="text-red-500">{message.message}</p>}
            {message.type === "errorValidEmail" && <p className="text-red-500">{message.message}</p>}
          </div>
          <div>
            <label htmlFor="username" className="text-sm text-slate-800">
              Username
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Please enter a username..."
            />
            {message.type === "errorValidUsername" && <p className="text-red-500">{message.message}</p>}
            {message.type === "errorUsernameMinLength" && <p className="text-red-500">{message.message}</p>}
            {message.type === "errorUsernameMaxLength" && <p className="text-red-500">{message.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-slate-800">
              Password
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Please enter a password..."
            />
          </div>
          {message.type === "errorPasswordMinLength" && <p className="text-red-500">{message.message}</p>}
          <div>
            <label htmlFor="verifyPassword" className="text-sm text-slate-800">
              Verify password
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="password"
              name="verifyPassword"
              id="verifyPassword"
              placeholder="Please verify your password..."
            />
          </div>
          {message.type === "errorPasswordMatch" && <p className="text-red-500">{message.message}</p>}
          <button className="py-3 bg-slate-600 rounded-lg text-white w-full font-semibold text-xl hover:cursor-pointer hover:bg-slate-400 transition-color duration-200 ease-in-out">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
