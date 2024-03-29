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
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" w-full text-[#f7f7f7] bg-[#202441] py-20">
      <Container>
        <div className="w-full flex flex-col-reverse gap-8 lg:gap-0  lg:flex-row">
          <div className="pr-0 lg:pr-8 grow flex flex-col gap-4">
            <Image
              src={"/logo.png"}
              height={115}
              width={115}
              alt="logo"
              className="lg:ml-0 mx-auto "
            />
            <div className="flex items-center lg:items-start flex-col gap-2 ">
              <h3 className="tracking-wider text-center lg:text-start uppercase text-2xl lg:text-3xl font-semibold">
                We&apos;re here to Help.
              </h3>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="">08148232644</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span className="">info@goldpayinvestment.com</span>
              </div>
              <div className="flex flex-col items-start gap-2 mt-4">
                <h4 className="text-xl text-[#f7f7f7] font-medium">
                  Connect with us
                </h4>
                <div className="flex w-full items-center justify-center lg:justify-start gap-2 mt-1">
                  <FaInstagramSquare className="cursor-pointer" size={30} />
                  <FaFacebookSquare className="cursor-pointer" size={30} />
                  <FaLinkedin className="cursor-pointer" size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="0 w-full flex flex-col md:flex-row md:justify-center lg:justify-center gap-8 md:gap-16 lg:gap-12  items-start grow">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-xl lg:text-2xl font-medium">Our Company</h2>
              <div className="w-20  h-[2px] bg-[#FFB600]"></div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <MdChevronRight />{" "}
                  <Link href="/about" className=" cursor-pointer">
                    About
                  </Link>
                </div>

                <div className="flex items-center gap-1">
                  <MdChevronRight />{" "}
                  <Link href="/careers" className="cursor-pointer ">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="text-xl lg:text-2xl font-medium">
                Office Locations
              </h2>
              <div className="w-20  h-[2px] bg-[#FFB600]"></div>

              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-lg">Port Harcourt</h3>
                <p className="">#74A Woji Road, PH</p>
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
            <div className="flex flex-col gap-4 ">
              <h2 className="text-xl lg:text-2xl font-medium">
                Help & Support
              </h2>
              <div className="w-20 h-[2px] bg-[#FFB600]"></div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <MdChevronRight />{" "}
                  <Link href="/application/loan" className=" cursor-pointer">
                    Application Form
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <MdChevronRight />{" "}
                  <Link href="/knowledge-center" className=" cursor-pointer ">
                    Knowledge Center
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <MdChevronRight />{" "}
                  <Link href="/privacy-policy" className=" cursor-pointer ">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
