import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   ">
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/images/ikea-logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </Link>

              <li>
                <Link
                  className="link-primary   "
                  aria-current="page"
                  to="/stories"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  className="link-primary   "
                  aria-current="page"
                  to="/jobs"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="link-primary   " to="/newsroom">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link className="link-primary   " to="/our-business">
                  Our business
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
