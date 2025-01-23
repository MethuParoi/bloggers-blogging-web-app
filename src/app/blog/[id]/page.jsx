"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const axiosPublic = useAxiosPublic();
  const [post, setPost] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      axiosPublic.get(`/posts/${id}`).then((response) => {
        setPost(response.data);
        setLoading(false);
      });
    }
  }, [id]);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative md:top-[-80px] ">
      <h1 className="text-3xl font-semibold text-primary">{post.title}</h1>
      <p className="text-gray-600 text-lg my-5">{post.body}</p>
    </div>
  );
};

export default Page;
