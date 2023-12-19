import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const styles = "leading-loose text-sm ";
const OurBoard = () => {
  return (
    <div className="w-full my-16">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%]  flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Our Team</h3>

            <div className="w-full flex  items-center justify-center py-12 gap-20">
              <div className=" cursor-pointer group">
                <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                  <Image
                    src="/chairman.jpg"
                    alt="chairman"
                    fill
                    className="object-cover"
                  />
                  <div
                    className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <a href="/">
                      <FaLinkedin size={25} color="#f7f7f7" />
                    </a>
                  </div>
                </div>
                <div className="w-full mt-4 justify-center flex-col flex">
                  <h3 className=" text-center text-sm font-semibold">
                    Mr. Jacob Ini
                  </h3>
                  <p className="text-center text-sm">Chairman</p>
                </div>
              </div>

              <div className="cursor-pointer group">
                <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                  <Image
                    src="/coo.jpg"
                    alt="chairman"
                    fill
                    className="object-cover"
                  />
                  <div
                    className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <a href="/">
                      <FaLinkedin size={25} color="#f7f7f7" />
                    </a>
                  </div>
                </div>
                <div className="w-full mt-4 justify-center flex-col flex">
                  <h3 className=" text-center text-sm font-semibold">
                    Mrs. Theresa Mark
                  </h3>
                  <p className="text-center text-sm">Chief Operating Officer</p>
                </div>
              </div>

              <div className="cursor-pointer group">
                <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                  <Image
                    src="/cao.jpg"
                    alt="chairman"
                    fill
                    className="object-cover"
                  />
                  <div
                    className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <a href="/">
                      <FaLinkedin size={25} color="#f7f7f7" />
                    </a>
                  </div>
                </div>
                <div className="w-full mt-4 justify-center flex-col flex">
                  <h3 className=" text-center text-sm font-semibold">
                    Mr. Matthew John
                  </h3>
                  <p className="text-center text-sm">
                    Chief Accounting Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurBoard;
