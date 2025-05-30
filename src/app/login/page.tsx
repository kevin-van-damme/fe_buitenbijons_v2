import Link from "next/link";
const page = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 via-grey-50 to-green-100">
      <div className="flex flex-col items-center rounded-2xl p-10 bg-white w-120 mx-auto">
        <h3 className="text-3xl mb-2 font-bold text-slate-800">Welcome Back</h3>
        <form action="" className="flex flex-col gap-7 w-full">
          <div>
            <label htmlFor="username" className="text-sm text-slate-800">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username..."
              name="username"
              className="border-1 border-slate-200 p-3 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-slate-800">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your password..."
              name="password"
              id="password"
              className="border-1 border-slate-200 p-3 rounded-md w-full"
            />
          </div>
          <button className="py-3 bg-slate-600 rounded-lg text-white w-full font-semibold text-xl hover:cursor-pointer hover:bg-slate-400 transition-color duration-200 ease-in-out">
            Login
          </button>
        </form>
        <div className="mt-4 align-middle w-full text-center text-slate-800 text-sm">
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
