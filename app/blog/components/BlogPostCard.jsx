import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPostCard = ({ image, title, description, date }) => {
  return (
    <div className=" h-[32rem] rounded-lg overflow-hidden pb-4 shadow ">
      <div className="relative aspect-square w-96 h-72 ">
        <Image
          src={image}
          className="object-cover"
          objectPosition="top"
          alt="post image"
          fill={true}
        />
      </div>

      <div className="px-4 py-4 flex flex-col gap-1">
        <h3 className="text-2xl">{title}</h3>
        <p className="leading-relaxed">{description}</p>
        <Link className="text-blue-600 mt-2 text-sm hover:underline" href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
