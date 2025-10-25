import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline">
            Climate Action Pledge
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};