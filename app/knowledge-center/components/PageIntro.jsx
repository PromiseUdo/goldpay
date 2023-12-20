import Container from "@/app/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const PageIntro = ({ image, title, descripton, url, button }) => {
  return (
    <div className="flex w-full  mt-16 mb-8 justify-center items-center">
      <Container>
        {/* <div className="flex items-center justify-center"> */}
        <div className=" w-[fit-content] gap-4 flex flex-col items-start h-full ">
          <h2 className=" text-5xl font-bold text-[#505ca4]">{title}</h2>
          <p className="max-w-lg text-[#1e1c1c]">{descripton}</p>
          {!button && (
            <Link
              href="/"
              className=" flex items-center gap-2 min-w-[150px] shadow-md bg-[#FFB600] text-[black] px-4 py-2 rounded-3xl text-base md:text-lg hover:bg-[#282e52] transition-all duration-100 font-semibold hover:text-[#f7f7f7]"
            >
              <FiExternalLink />
              <span>Get Started</span>
            </Link>
          )}
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default PageIntro;
