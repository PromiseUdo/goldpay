import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuAsterisk } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const ContactFormMap = () => {
  return (
    <div className="w-full my-28">
      <div className="w-full h-[25rem] flex items-center">
        <div className="bg-[#202441] w-[50%] h-full flex items-center justify-center">
          <div className="z-20 w-[50%] rounded-lg h-[36rem] bg-[#f7f7f7] px-8 py-8 shadow-md ">
            <h3 className="text-2xl font-semibold">Leave us a message</h3>
            <p className="text-sm leading-relaxed mt-2">
              Have any inquiries, kindly drop a message and we will respond
            </p>

            <form className="flex flex-col gap-4 mt-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Name</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-shopday-border h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <FaRegUser color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Email</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-shopday-border h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <MdOutlineEmail color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Subject</span>
                </label>
                <div className="border flex items-center border-solid border-shopday-border h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <MdOutlineSubject color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Message</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-shopday-border h-24 px-2 py-2 gap-2 rounded-md outline-none">
                  <FaRegMessage color="#979797" />
                  <textarea
                    style={{
                      resize: "none",
                    }}
                    required
                    className="text-sm border-none outline-none h-[4rem] bg-[#f7f7f7] w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mt-3">
                <button className="flex items-center gap-3 px-4 py-2 border border-[#FFB600] shadow bg-transparent rounded-3xl hover:bg-[#282e52] hover:border-[#282e52] hover:text-[#f7f7f7]">
                  <FiSend />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[50%] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9061213271237!2d7.04800326961997!3d4.834368836030279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cda068514cc3%3A0x8a5a3b0c8815873e!2s46%20Woji%20Rd%2C%20Trans%20Amadi%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1703010603134!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFormMap;
