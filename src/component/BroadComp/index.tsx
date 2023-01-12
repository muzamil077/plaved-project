import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const pages = [
  { name: "Home", href: "#", current: false, URL: "/Home" },
  { name: "All Inspections List", href: "#", current: true },
];

const BreadComp = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <IoIosArrowBack
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <>
            <Link href={`${page.URL}`}>
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            </Link>
          </>
        ))}
      </ol>
    </nav>
  );
};

export default BreadComp;