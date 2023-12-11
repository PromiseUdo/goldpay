import React from "react";
import { MdChevronRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="h-40  w-full">
      <div className="flex items-center">
        <p>Home</p>
        <MdChevronRight />
        <p>About</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
