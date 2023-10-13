import Link from "next/link";
import { AppConfig } from "@/utils/appConfig";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="pb-8 pt-16">
        <h1 className="text-3xl font-bold text-gray-900">{AppConfig.title}</h1>
        <h2 className="text-xl">{AppConfig.description}</h2>
      </div>

      <div className="flex justify-between">
        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/guestbook/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Guestbook
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Portfolio
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/sign-in/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Sign in
              </Link>
            </li>

            <li className="mr-6">
              <Link
                href="/sign-up/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
