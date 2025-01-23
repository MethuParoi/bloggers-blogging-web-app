import Blogs from "@/components/blogs/Blogs";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-primary">
        <Hero />
        <Blogs />
      </h1>
    </div>
  );
}
