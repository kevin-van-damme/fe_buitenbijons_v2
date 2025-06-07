"use server";

import type { Message } from "@/types";
import { badWords } from "@/badWords";

export const handleFormSubmit = async (initState: Message, fd: FormData): Promise<Message> => {
  const email = fd.get("email") as string;
  const username = fd.get("username") as string;
  const password = fd.get("password") as string;
  const verifyPassword = fd.get("verifyPassword") as string;

  if (!email || !username || !password || !verifyPassword) {
    return { type: "errorAllFields", message: "All fields are required", status: 400 };
  }
  if (!email) {
    return { type: "errorEmail", message: "Please enter an email address", status: 400 };
  }
  if (!email.includes("@")) {
    return { type: "errorValidEmail", message: "Please enter a valid email address", status: 400 };
  }
  if (badWords.some((word) => email.trim().toLowerCase().includes(word))) {
    return { type: "errorBadWord", message: "Email contains profanity", status: 400 };
  }
  if (!username) {
    return { type: "errorValidUsername", message: "Please enter a valid username", status: 400 };
  }
  if (badWords.some((word) => username.trim().toLowerCase().includes(word))) {
    return { type: "errorBadWord", message: "Username contains profanity", status: 400 };
  }
  if (username.trim().length < 3) {
    return { type: "errorUsernameMinLength", message: "Username must be at least 3 characters long", status: 400 };
  }
  if (username.trim().length > 20) {
    return { type: "errorUsernameMaxLength", message: "Username must be less than 20 characters long", status: 400 };
  }
  if (password.trim().length < 8) {
    return { type: "errorPasswordMinLength", message: "Password must be at least 8 characters long", status: 400 };
  }
  if (password.trim() !== verifyPassword.trim()) {
    return { type: "errorPasswordMatch", message: "Passwords do not match", status: 400 };
  }
  return { type: "success", message: "Account created successfully", status: 201 };
};
