import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="mx-auto flex justify-between max-w-6xl w-full py-5 p-3 text-xl font-semibold text-slate-900">
        <i>Logo</i>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="/" className="hover:text-slate-700 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-700 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/campings" className="hover:text-slate-700 transition-all">
                Campings
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-slate-700 transition-all">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-slate-700 transition-all">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
