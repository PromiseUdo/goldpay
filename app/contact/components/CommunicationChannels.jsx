import Container from "@/app/components/Container";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const CommunicationChannels = () => {
  return (
    <div className="w-full ">
      <Container>
        <div>
          <div className="flex items-center gap-8 my-6">
            <div>
              <MdOutlineAccessTimeFilled size={30} color="#505ca4" />
            </div>

            <div>
              <h4 className=" font-semibold">Business Hours</h4>
              <p>8am - 5pm (Mon-Fri)</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p>You can reach us directly through our communication channels</p>

            <div className="flex flex-col  max-w-lg gap-4">
              {/* Call */}
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-2">
                  <FaPhoneSquareAlt size={30} color="#505ca4" className="" />
                  <span className="font-semibold">Call Us</span>
                </div>

                <div className="flex  flex-col gap-1 items-end">
                  <span className="font-light">08142555121 </span>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-3 w-full justify-between">
                <div className="flex items-center gap-2">
                  <MdEmail size={30} color="#505ca4" className="" />
                  <span className="font-semibold">Send an Email</span>
                </div>

                <div className="flex flex-col gap-1  items-end">
                  <span className="font-light">
                    info@goldpayinvestment.com{" "}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 w-full justify-between">
                <div className="flex items-center gap-2">
                  <FaLocationDot size={30} color="#505ca4" className="" />
                  <span className="font-semibold">Visit our Office</span>
                </div>

                <div className="flex  flex-col items-end gap-1">
                  <h4 className="font-semibold">HEAD OFFICE</h4>
                  <span className="font-light">
                    75A Woji Rd. Port Harcourt, Rivers State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunicationChannels;
