import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const styles = "leading-relaxed text-sm ";
const WhyUs = () => {
  return (
    <div className="w-full my-16">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] 2xl:w-[80%]  flex flex-col gap-4 ">
            <h3 className="text-xl font-semibold">Why choose us</h3>

            <div className="w-full flex flex-col md:flex-row items-center gap-4 2xl:gap-12">
              <div className="shadow-md py-4 2xl:py-12 px-3 lg:px-8 grow h-[fit-content] md:h-72 lg:h-52 justify-center flex flex-col gap-2 bg-[#00165A50]   rounded-xl">
                <h4 className="font-semibold bg-[#00165A20] px-2 py-1 rounded-md w-[fit-content]">
                  Transparency
                </h4>
                <p className={styles}>
                  We understand that trust is key when it comes to financial
                  matters. That&apos;s why we prioritize transparency in
                  everything we do We believe in being honest and upfront with
                  our clients, providing them with all the information they need
                  to make informed decisions about their finances.
                </p>
              </div>
              <div className="shadow-md  py-4 2xl:py-12 px-3 lg:px-8 grow [fit-content] md:h-72 lg:h-52 justify-center flex flex-col gap-2    bg-[#FFB60050] rounded-xl">
                <h4 className="font-semibold bg-[#FFB60020]  px-2 py-1 rounded-md w-[fit-content]">
                  Tailored To Your Needs{" "}
                </h4>
                <p className={styles}>
                  We know that everyone&apos;s financial situation is unique.
                  That&apos;s why we offer a range of loan and investment
                  options to suit your specific needs. Whether you&apos;re
                  looking to start a business, buy a home, or invest in your
                  future, we&apos;ve got you covered.
                </p>
              </div>
              <div className="shadow-md  py-4 2xl:py-12 px-3 lg:px-8 grow [fit-content] md:h-72 lg:h-52 flex flex-col gap-2  bg-[#80800050] rounded-xl justify-center">
                <h4 className="font-semibold  px-2 py-1 rounded-md w-[fit-content] bg-[#80800020]">
                  Exceptional Customer Service
                </h4>
                <p className={styles}>
                  Our team is available to answer your questions, provide
                  guidance, and offer support whenever you need it. We
                  understand that financial matters can be stressful, and
                  we&apos;re here to make the process as smooth and stress-free
                  as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
