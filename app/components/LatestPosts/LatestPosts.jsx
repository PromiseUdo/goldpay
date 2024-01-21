import React from "react";
import Container from "../Container";
import PostCard from "./components/PostCard";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

const posts = [
  {
    title: "FINANCIAL TIPS: make your worries go away",
    image: "/worry.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi numquam recusandae? Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
  {
    title: "maybe it's time to get a new car",
    image: "/carbreakdown.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi numquam recusandae? Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
  {
    title: "how we can help you get that home",
    image: "/newhome.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi numquam recusandae? Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
];

const LatestPosts = () => {
  return (
    <section className="bg-[#f2f2f2] py-8 w-full">
      <Container>
        <div className="w-full py-12">
          <div className="w-full">
            <h2 className="text-[#505ca4]  font-semibold text-2xl lg:text-4xl leading-relaxed">
              Latest from our Blog
            </h2>
            <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>
          </div>

          <div className="mt-4 posts-container flex flex-col lg:flex-row items-center justify-center gap-8">
            {posts.map((post, idx) => (
              <PostCard
                key={idx}
                title={post.title}
                image={post.image}
                url={post.url}
                snippet={post.snippet}
              />
            ))}
          </div>
          <div className="mt-8 w-full flex items-center justify-center">
            <Link
              href="/blog"
              target="_blank"
              className=" flex items-center gap-2 shadow hover:shadow-md transition-all duration-100 border border-[#e5e5e5]  hover:bg-[#e5e5e5] py-2 px-4 rounded-md"
            >
              <TbExternalLink />

              <span>See our Blog</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestPosts;
