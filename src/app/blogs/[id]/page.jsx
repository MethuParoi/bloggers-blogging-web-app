import useAxiosPublic from "@/hooks/useAxiosPublic";
import React from "react";

const page = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axiosPublic.get(`/posts/${id}`).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);
  return <div>page</div>;
};

export default page;
