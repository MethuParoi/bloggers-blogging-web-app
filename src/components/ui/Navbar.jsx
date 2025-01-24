// import Link from "next/link";
// import React, { use } from "react";
// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { useRouter } from "next/navigation";

// const Navbar = async () => {
//   const { isAuthenticated } = getKindeServerSession();
//   const isUserAuthenticated = await isAuthenticated();
//   const router = useRouter();

//   const habdleVisitProfile = () => {};

//   return (
//     <div className="navbar bg-primary text-gray-50">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <Link href="/">Home</Link>
//             </li>

//             <li>
//               <Link href="/profile">Profile</Link>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Bloggers</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>

//           <li>
//             <Link href="/profile">Profile</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {isUserAuthenticated ? (
//           <LogoutLink className="btn bg-red-400 hover:bg-red-500 text-gray-50 border-none">
//             Logout
//           </LogoutLink>
//         ) : (
//           <LoginLink className="btn bg-red-400 hover:bg-red-500 text-gray-50 border-none">
//             Login
//           </LoginLink>
//         )}
//         {/* <LoginLink className="btn bg-red-400 hover:bg-red-500 text-gray-50 border-none">
//           Login
//         </LoginLink> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import Link from "next/link";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ClientNavbar from "./ClientNavbar";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return <ClientNavbar isUserAuthenticated={isUserAuthenticated} />;
};

export default Navbar;
