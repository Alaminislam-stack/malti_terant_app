import React from "react";

function Footer() {
  return (
    <footer className="w-full  bg-gray-50 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-gray-700 font-semibold text-lg">
          Bloggr &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Alaminislam-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="alamin890213@gmail.com"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;