import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import { MdChevronRight } from "react-icons/md";

const Businsess = ({ image, title, desc, list, buttonCaption, row }) => {
  return (
    <div
      className={clsx(
        "py-20  w-[80%] 2xl:w-[70%] flex  items-center justify-between",
        row && "flex-row-reverse"
      )}
    >
      <div className="w-full relative flex flex-col items-center justify-center">
        <div className="bg-[#505ca4] h-[20rem] w-[24rem] rounded-md ">
          <div className="overflow-hidden flex flex-col items-center justify-center gap-4 relative bottom-4 right-4 bg-[#c1c1d1] h-[20rem] w-[24rem] rounded-md">
            <Image
              src={image}
              alt="loan image"
              fill={true}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8  w-full">
        <h2 className="text-[#505ca4]  text-4xl font-semibold">{title}</h2>
        <div className="flex flex-col gap-4">
          <p className="max-w-lg leading-relaxed">{desc}</p>
          <ul className="flex flex-col gap-1 leading-relaxed">
            {list.map((_, idx) => (
              <li key={idx} className="flex items-center">
                <MdChevronRight /> {_}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="min-w-[150px] shadow-md bg-[#FFB600] text-[black] px-4 py-2 rounded-3xl text-base md:text-lg hover:bg-[#282e52] transition-all duration-100 font-semibold hover:text-[#f7f7f7]">
            {buttonCaption}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Businsess;
