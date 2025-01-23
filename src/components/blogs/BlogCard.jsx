import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-gray-200 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title line-clamp-1 ">{blog.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-xs bg-red-400 border-none hover:bg-red-500 text-gray-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
