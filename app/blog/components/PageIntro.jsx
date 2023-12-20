import Container from "@/app/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const PageIntro = ({ image, title, descripton, url, button }) => {
  return (
    <div className="my-12 flex w-full  mt-16 mb-8 justify-center items-center">
      <Container>
        {/* <div className="flex items-center justify-center"> */}
        <div className=" w-[fit-content] gap-4 flex flex-col items-start h-full ">
          <h2 className=" text-5xl font-bold text-[#505ca4]">{title}</h2>
          <p className="max-w-lg text-[#1e1c1c]">{descripton}</p>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default PageIntro;
