"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../Container";
import clsx from "clsx";
import useOnClickOutside from "../../hooks/clickOutside";
import { usePathname } from "next/navigation";
import MenuItems from "./components/MenuItems";

const pages = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Loans",
    url: "#",
    submenu: [
      {
        title: "Personal Loans",
        submenu: [
          { title: "Loan for School Fees", url: "/loans/loan-for-fees" },
          {
            title: "Loan for Salary Earners",
            url: "/loans/loan-for-salary-earners",
          },
        ],
      },

      {
        title: "Business Loans ",
        submenu: [
          {
            title: "Loan for SMEs",
            url: "/loans/loan-for-sme",
          },
        ],
      },
    ],
  },

  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Help",
    url: "/knowledge-center",
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
      id="topNav"
      className={clsx(
        " z-[999]  top-0 py-2 w-full transition-all duration-100",
        isScrolled
          ? "bg-[rgb(32,36,65)]  shadow shadow-[#485293]"
          : "bg-transparent text-[#f7f7f7]",
        pathName === "/"
          ? "fixed text-[#f7f7f7]"
          : "!bg-[rgb(32,36,65)]  sticky text-[#f7f7f7]"
      )}
    >
      <Container>
        <nav className="w-full h-[65px] flex items-center justify-between">
          <Link className="h-[inherit] w-[110px]" href="/">
            <Image src={"/logo.png"} height={80} width={80} alt="logo" />
          </Link>
          <div className="  items-center hidden md:flex">
            <ul className="flex items-center gap-[1.7rem] text-[1.2rem] ">
              {pages.map((page, idx) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={page} key={idx} depthLevel={depthLevel} />
                );
              })}
              <li className="bg-[#FFB600] rounded-3xl text-black px-4 py-2  transition-all duration-100">
                <Link href="/application/loan" className="	font-semibold">
                  Apply{" "}
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
          "border-r border-t border-b border-[#f7f7f750] fixed top-0 left-0 z-20 w-[70%] h-[100vh] bg-[#202441] transition-all duration-100 ease-in-out",
          !isActive && "translate-x-[-100%]"
        )}
      >
        <nav className="p-[2rem] h-[100vh] w-[100%]">
          <div className="flex items-center justify-between w-full border-b border-[#727272] pb-[2rem] mb-[2rem]  logo-close-container">
            {/* <Link className="h-[70px] w-[70px]" href="/">
              <div
                className="logo  h-[70px] w-[70px]"
                style={{
                  background: "url('/logo.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Link> */}

            <Link className="h-[inherit] w-[110px]" href="/">
              <Image src={"/logo.png"} height={75} width={75} alt="logo" />
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
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f7f7f7]"></span>
                </Link>
              </li>
            ))}
            <li className="bg-[#FFB600] mt-8 rounded-3xl text-black px-4 py-2  transition-all duration-100">
              <Link href="/application/loan" className="	font-semibold">
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
