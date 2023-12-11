"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";
import clsx from "clsx";
import useOnClickOutside from "../hooks/clickOutside";
import { usePathname } from "next/navigation";

const pages = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Loans",
    url: "/about",
  },
  {
    title: "Invest",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/about",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);
  const [mobileDropDown, setMobileDropdown] = useState(false);
  const mobileNav = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pathName, setPathname] = useState("/");

  useOnClickOutside(mobileNav, () => setIsActive(false));
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPathname(pathname);
  }, [pathname]);

  return (
    <div
      className={clsx(
        "z-[999]  top-0 py-2 w-full transition-all duration-100",
        isScrolled
          ? "bg-[rgb(32,36,65)]  shadow shadow-[#485293]"
          : "bg-transparent text-[#f7f7f7]",
        pathName === "/" ? "fixed text-[#f7f7f7]" : "sticky text-black"
      )}
    >
      <Container>
        <nav className="w-full h-[65px] flex items-center justify-between">
          <Link className="h-[inherit] w-[110px]" href="/">
            <Image src={"/logo.png"} height={80} width={80} alt="logo" />
          </Link>
          <div className="  items-center hidden md:flex">
            <ul className="flex items-center gap-[1.7rem] text-[1.2rem] ">
              {pages.map((page, idx) => (
                <li key={idx}>
                  <Link
                    className="font-extralight	 group  transition duration-300"
                    href={page.url}
                  >
                    {page.title}
                    <span
                      class={clsx(
                        "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ",
                        pathName === "/" ? "bg-[#f7f7f7]" : "bg-black"
                      )}
                    ></span>
                  </Link>
                </li>
              ))}
              <li className="bg-[#FFB600] rounded-3xl text-black px-4 py-2  transition-all duration-100">
                <Link href="/about" className="	font-semibold">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[1.7rem] flex items-center md:hidden">
            <button>
              <FaBars onClick={() => setIsActive(true)} color="#f7f7f7" />
            </button>
          </div>
        </nav>
      </Container>
      {/* Mobile Nav */}
      <div
        ref={mobileNav}
        className={clsx(
          "border-r border-t border-b border-[#f7f7f750] fixed top-0 left-0 z-20 w-[60%] h-[100vh] bg-[#505ca4] transition-all duration-100 ease-in-out",
          !isActive && "translate-x-[-100%]"
        )}
      >
        <nav className="p-[2rem] h-[100vh] w-[100%]">
          <div className="flex items-center justify-between w-full border-b border-[#f7f7f7] pb-[1rem] mb-[2rem]  logo-close-container">
            <Link className="h-[70px] w-[70px]" href="/">
              <div
                className="logo bg-red-500 h-[70px] w-[70px]"
                style={{
                  background: "url('/logo.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Link>
            <button className="text-[1.2rem] flex items-center justify-center">
              <FaTimes onClick={() => setIsActive(false)} color="#f7f7f7" />
            </button>
          </div>

          {/* links */}
          <ul className="flex flex-col ">
            {pages.map((page, idx) => (
              <li className="my-[0.4rem]  " key={idx}>
                <Link
                  className="w-full pb-[0.5rem] text-[#f7f7f7] group  transition duration-300 "
                  href={page.url}
                >
                  {page.title}
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f7f7f7]"></span>
                </Link>
              </li>
            ))}
            <li className="bg-[#f7f7f7] mt-[0.4rem] rounded-md text-[#505ca4] hover:bg-[#c5c5c5] transition-all duration-100 px-4 py-2">
              <Link href="/about">Get Involved</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
