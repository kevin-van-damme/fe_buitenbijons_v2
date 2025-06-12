import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-10 py-5 px-3">
      <nav className="mx-auto max-w-6xl flex justify-between">
        <div className="flex gap-3">
          <p>© 2025 BuitenBijOns </p>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </nav>
    </div>
  );
};
export default Footer;
