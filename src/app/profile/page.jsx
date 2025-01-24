import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/");
  }

  if (isUserAuthenticated) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-primary ">
          Welcome to your profile!
        </h1>
      </div>
    );
  }
};

export default page;
