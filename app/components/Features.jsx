import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Features = () => {
  return (
    <section className="w-full py-12 ">
      <Container>
        <div className="w-full flex items-center justify-between h-full">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-4xl font-semibold  leading-relaxed text-[#505ca4]">
                Offering you best quality <br /> loan services
              </span>
              <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>
            </div>
            <div>
              <p className="max-w-lg leading-relaxed">
                Goldpay Investment Limited offers affordable loans with a
                streamlined approval process to quickly get you into the reality
                of your goals.{" "}
              </p>
            </div>

            <div className="flex gap-12 items-center">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/options.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">
                  Affordable Options
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/advice.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">Expert Advice</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/loan.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">
                  Financing up to ₦5 billion
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#f2f2f2] h-[16rem] w-[24rem] gap-12 flex flex-col justify-center px-16">
              <h2 className="text-4xl font-semibold text-[#505ca4]">
                Find a plan that works for you
              </h2>

              <div>
                <Link
                  target="_blank"
                  className="flex items-center gap-2"
                  href="/application/loan"
                >
                  <span className="text-lg font-semibold text-[#505ca4] hover:underline">
                    Apply Now
                  </span>
                  <MdArrowRightAlt
                    size={30}
                    className="text-xl"
                    color="#FFB600"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
