"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axiosPublic.get("/posts").then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mb-10">
      <p className=" text-gray-600  text-3xl sm:text-5xl  font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-600 w-[130px] sm:w-[150px] mx-auto mt-5 mb-10">
        Blogs
      </p>

      {/* grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 justify-items-center">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          posts.map((post) => <BlogCard blog={post} />)
        )}
      </div>
    </div>
  );
};

export default Blogs;
