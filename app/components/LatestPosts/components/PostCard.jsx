import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const PostCard = ({ image, title, snippet, url }) => {
  return (
    <div className="bg-[#fff] shadow  hover:shadow-lg overflow-hidden w-full rounded-lg h-[350px] lg:w-[450px] border border-[#d5d5d5] cursor-pointer transition-all duration-100">
      <div
        className="h-[10rem] w-full"
        style={{
          background: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="h-[250px] w-full px-4 py-2 flex flex-col gap-3">
        <h3 className="uppercase text-[#505ca4] font-semibold">{title}</h3>
        <p>{snippet}</p>
        <Link className="flex items-center gap-2" href={url}>
          <span className="font-light hover:text-[#505ca4] hover:underline">
            Read More
          </span>{" "}
          <FaChevronRight color="#505ca4" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
