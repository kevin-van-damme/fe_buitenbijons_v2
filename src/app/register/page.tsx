import RegisterForm from "@/components/registerpage/RegisterForm";
import { Message } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
  openGraph: {
    title: "Register",
    description: "Register for an account",
  },
};

const page = ({ data }: { data: Message }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 via-grey-50 to-green-100 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center rounded-2xl p-10 bg-white w-120 mx-auto shadow-xl/10">
        <h3 className="text-3xl mb-2 font-bold text-slate-800">Sign up</h3>
        <RegisterForm />
      </div>
    </div>
  );
};
export default page;
