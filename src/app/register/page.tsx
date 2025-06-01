const page = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 via-grey-50 to-green-100 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center rounded-2xl p-10 bg-white w-120 mx-auto shadow-xl/10">
        <h3 className="text-3xl mb-2 font-bold text-slate-800">Register here</h3>
        <form action="" className="flex flex-col gap-7 w-full">
          <div>
            <label htmlFor="email" className="text-sm text-slate-800">
              Email
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Please enter a valid emailadress..."
            />
          </div>
          <div>
            <label htmlFor="username" className="text-sm text-slate-800">
              Username
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Please enter a username..."
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-slate-800">
              Password
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Please enter a password..."
            />
          </div>
          <div>
            <label htmlFor="verifyPassword" className="text-sm text-slate-800">
              Verify password
            </label>
            <input
              className="border-1 border-slate-200 p-3 rounded-md w-full"
              type="password"
              name="verifyPassword"
              id="verifyPassword"
              placeholder="Please verify your password..."
            />
          </div>
          <button className="py-3 bg-slate-600 rounded-lg text-white w-full font-semibold text-xl hover:cursor-pointer hover:bg-slate-400 transition-color duration-200 ease-in-out">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
