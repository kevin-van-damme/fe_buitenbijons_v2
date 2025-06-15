"use client";

import { useActionState } from "react";
import { handleFormSubmit } from "@/server-actions";
import type { Message } from "@/types";

const initialState: Message = { type: "", message: "", status: 0 };

const RegisterForm = () => {
  const [state, action, isPending] = useActionState(handleFormSubmit, initialState);

  return (
    <form action={action} className="flex flex-col gap-6 w-full max-w-md mx-auto" noValidate>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="your@email.com"
        />
        {["errorEmail", "errorValidEmail", "error", "errorBadWord"].includes(state.type) && state.message.includes("email") && (
          <p className="text-sm text-red-600 mt-1">{state.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          minLength={3}
          maxLength={20}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Your username"
        />
        {["errorUsernameLength", "error", "errorBadWord"].includes(state.type) && state.message.includes("Username") && (
          <p className="text-sm text-red-600 mt-1">{state.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="picture" className="block text-sm font-medium text-gray-700">
          Avatar
        </label>
        <input type="file" name="picture" id="picture" accept="image/*" className="w-full border border-gray-300 rounded-md px-4 py-2" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          minLength={8}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Enter password"
        />
        {["errorPasswordMinLength", "error"].includes(state.type) && state.message.includes("Password") && (
          <p className="text-sm text-red-600 mt-1">{state.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="verifyPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="verifyPassword"
          id="verifyPassword"
          required
          minLength={8}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Re-enter password"
        />
        {state.type === "errorPasswordMatch" && <p className="text-sm text-red-600 mt-1">{state.message}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 disabled:opacity-50" disabled={isPending}>
        {isPending ? "Creating Account..." : "Create Account"}
      </button>
      {state.type === "success" && <p className="text-sm text-green-600 mt-2">{state.message}</p>}
    </form>
  );
};

export default RegisterForm;
