import React from "react";
import Container from "../Container";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const Footer = () => {
  return (
    <section className="w-full text-[#f7f7f7] bg-[#202441] py-20">
      <Container>
        <div className="w-full flex">
          <div className="pr-8 grow flex flex-col gap-4">
            <Image src={"/logo.png"} height={115} width={115} alt="logo" />
            <div className="flex flex-col gap-2 ">
              <h3 className="tracking-wider uppercase text-3xl font-semibold">
                We&apos;re here to Help.
              </h3>
              <div className="flex items-center gap-1">
                <FaPhone />
                <span className="">+234 (0) 816 476 3362</span>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail />
                <span className="">goldpayinvestment@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaInstagramSquare className="cursor-pointer" size={30} />
                <FaFacebookSquare className="cursor-pointer" size={30} />
                <FaLinkedin className="cursor-pointer" size={30} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Our Company</h2>
            <div className="w-20  h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer">About</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Community</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className="cursor-pointer ">Careers</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Office Locations</h2>
            <div className="w-20  h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg">Port Harcourt</h3>
              <p className="">#23 Woji Road, PH</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg">Opening Hours</h3>
              <p className=" flex items-center gap-1">
                <FaCalendarDay /> <span>Monday - Friday</span>
              </p>
              <p className=" flex items-center gap-1">
                <MdAccessTimeFilled /> <span>8:00AM- 5:00PM</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Help & Support</h2>
            <div className="w-20 h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer">Application & Forms</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Knowledge Center</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;