import Container from "@/app/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const PageIntro = ({ image, title, descripton, url, button }) => {
  return (
    <div className="flex w-full  my-16 justify-center items-center">
      <Container>
        {/* <div className="flex items-center justify-center"> */}
        <div className="flex w-full justify-center gap-28 px-20 items-center">
          <div className="bg-[#505ca4] h-[20rem] w-[24rem] rounded-md  ">
            <div className="overflow-hidden flex flex-col items-center aspect-square justify-center gap-4 relative bottom-4 right-4 bg-[#c1c1d1] h-[20rem] w-[24rem] rounded-md">
              <Image
                src={image}
                alt="loan image"
                fill={true}
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>

          <div className=" w-[fit-content] gap-4 flex flex-col items-start h-full px-20">
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
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default PageIntro;
