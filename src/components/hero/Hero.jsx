import Image from "next/image";
import img from "../../../public/hero/blog.avif";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-y-10 md:gap-y-0 h-[680px] sm:h-[600px] md:h-[450px] lg:h-[500px] xl:h-[450px] mt-10">
      <div className="w-full md:w-1/2 md:mr-12">
        <h3 className="text-lg lg:text-xl font-bold text-accentHover nunitoSans-font mb-6">
          Welcome to Bloggers
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-12">
          A platform to share and Read Blogs
        </h1>
        <p className="text-md lg:text-lg text-gray-600">
          Our platform is designed to help you share your thoughts and ideas
          with the world. We provide a simple and easy-to-use interface that
          allows you to create and publish your own blog posts in minutes.
          Whether you're a seasoned blogger or just getting started, Bloggers
          has everything you need to get your content out there and connect with
          your audience.
        </p>
        {/* <SearchSection /> */}
      </div>
      {/* hero slider */}
      <div className="w-full md:w-1/2">
        <Image className="rounded-xl w-[350px] sm:w-full" src={img} />
      </div>
    </div>
  );
};

export default Hero;
