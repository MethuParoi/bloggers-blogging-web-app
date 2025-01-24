"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from "next/navigation";

const ClientNavbar = ({ isUserAuthenticated }) => {
  const router = useRouter();

  const handleVisitProfile = () => {
    if (isUserAuthenticated) {
      router.push("/profile");
    }
    router.push(
      "https://methuparoisblogs.kinde.com/auth/cx/_:nav&m:login&psid:019496a3939808d72c4f3bd9e18f12da"
    );
  };

  return (
    <div className="navbar bg-primary text-gray-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li onClick={() => handleVisitProfile()} role="button">
              Profile
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bloggers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li onClick={() => handleVisitProfile()} role="button">
            Profile
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isUserAuthenticated ? (
          <LogoutLink className="btn bg-red-400 hover:bg-red-500 text-gray-50 border-none">
            Logout
          </LogoutLink>
        ) : (
          <LoginLink className="btn bg-red-400 hover:bg-red-500 text-gray-50 border-none">
            Login
          </LoginLink>
        )}
      </div>
    </div>
  );
};

export default ClientNavbar;
