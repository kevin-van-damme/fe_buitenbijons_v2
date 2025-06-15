"use server";

import type { Message } from "@/types";
import { badWords } from "@/badWords";

export const handleFormSubmit = async (prevState: Message, formData: FormData): Promise<Message> => {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const verifyPassword = formData.get("verifyPassword") as string;
  let picture = formData.get("picture");

  if (!email || !username || !password || !verifyPassword) {
    return { type: "error", message: "All fields are required", status: 400 };
  }

  if (!email.includes("@")) {
    return { type: "error", message: "Email must be valid", status: 400 };
  }

  if (badWords.some((word) => email.toLowerCase().includes(word))) {
    return { type: "error", message: "Profanity not allowed in email", status: 400 };
  }

  if (badWords.some((word) => username.toLowerCase().includes(word))) {
    return { type: "error", message: "Profanity not allowed in username", status: 400 };
  }

  if (username.trim().length < 3 || username.trim().length > 20) {
    return { type: "error", message: "Username must be 3–20 characters", status: 400 };
  }

  if (password.length < 8) {
    return { type: "error", message: "Password must be at least 8 characters", status: 400 };
  }

  if (password !== verifyPassword) {
    return { type: "error", message: "Passwords do not match", status: 400 };
  }

  if (!picture) {
    picture = "./defaultavatar/default_profile_picture.png";
  }

  try {
    const res = await fetch("https://be-buitenbijons-test.ddev.site:33001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password, verifyPassword, picture }),
    });

    const data = await res.json();

    return {
      type: data.type || "success",
      message: data.message || "Account created successfully",
      status: res.status,
    };
  } catch (error) {
    return {
      type: "error",
      message: "Failed to register. Please try again later.",
      status: 500,
    };
  }
};
