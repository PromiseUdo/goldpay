import React from "react";
import Container from "../Container";
import PostCard from "./components/PostCard";

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
            <h2 className="text-[#505ca4]  font-semibold text-4xl leading-relaxed">
              Latest Posts
            </h2>
            <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>
          </div>

          <div className="posts-container flex items-center justify-center gap-8">
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
            <button className="shadow hover:shadow-md transition-all duration-100 border border-[#e5e5e5]  hover:bg-[#e5e5e5] py-2 px-4 rounded-md">
              View blog
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestPosts;