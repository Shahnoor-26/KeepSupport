"use client";
import Link from "next/link";
import { React, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [Dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-slate-950 h-16 max-lg:h-14 max-md:h-12 w-full flex justify-between items-center px-5 sticky top-0 z-50">
      <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center">
        KeepSupport
      </h1>
      {session && (
        <>
          <button
            onClick={() => {
              setDropdown(!Dropdown);
            }}
            onBlur={() => {
              setTimeout(() => {
                setDropdown(false);
              }, 300);
            }}
            className="flex justify-center items-center space-x-2 bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white font-semibold hover:text-black py-2 px-5 max-lg:py-1.5 max-lg:px-4 max-md:px-3 max-lg:text-sm max-md:text-xs border border-white hover:border-slate-400 rounded-full relative"
          >
            <span>{session.user.name}</span>
            <svg
              className="max-lg:h-5 max-lg:w-5 max-md:h-4 max-md:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className={`${
              Dropdown ? "" : "hidden"
            } bg-slate-950 border border-slate-400 absolute top-20 max-lg:top-16 right-5 flex flex-col justify-evenly px-4 h-48 text-base max-lg:text-sm font-semibold w-36 rounded-xl`}
          >
            <Link
              href={"/profile"}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/bgebyztw.json"
                trigger="hover"
                stroke="bold"
                state="hover-looking-around"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>Profile</span>
            </Link>
            <Link
              href={`/${session.user.name}`}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/laksvpbf.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>My Page</span>
            </Link>
            <Link
              href={"/search"}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/pagmnkiz.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>Search</span>
            </Link>
            <button
              className="py-1 rounded-full bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white hover:text-black border border-slate-400"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
      {!session && (
        <div>
          <button
            onClick={() => {
              setDropdown(!Dropdown);
            }}
            onBlur={() => {
              setTimeout(() => {
                setDropdown(false);
              }, 300);
            }}
            className="flex justify-center items-center space-x-2 bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white font-semibold hover:text-black py-2 px-5 max-lg:py-1.5 max-lg:px-4 max-md:px-3 max-lg:text-sm max-md:text-xs border border-white hover:border-slate-400 rounded-full relative"
          >
            <span>Menu</span>
            <svg
            className="max-lg:h-5 max-lg:w-5 max-md:h-4 max-md:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className={`${
              Dropdown ? "" : "hidden"
            } bg-slate-950 border border-slate-400 absolute top-20 max-lg:top-16 right-5 flex flex-col justify-evenly px-4 h-36 text-base max-lg:text-sm font-semibold w-32 rounded-xl`}
          >
            <Link
              href={"/login"}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/bgebyztw.json"
                trigger="hover"
                stroke="bold"
                state="hover-looking-around"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>Sign In</span>
            </Link>
            <Link
              href={"/search"}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/pagmnkiz.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>Search</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center space-x-2 hover:underline"
            >
              <lord-icon
                class="h-6 w-6"
                src="https://cdn.lordicon.com/laqlvddb.json"
                trigger="hover"
                stroke="bold"
                state="hover-partial-roll"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
              <span>Home</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
