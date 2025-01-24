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
