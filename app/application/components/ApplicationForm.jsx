"use client";

import Container from "@/app/components/Container";
import React, { useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import SearchableDropdown from "./SearchableDropdown";
import { gender, hearAboutUs, maritalStatus, statesData } from "./data";

import "../styles/styles.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const ApplicationForm = () => {
  const [value, setValue] = useState("");
  const [loanType, setLoanType] = useState("personal");
  return (
    <div className="w-full my-32">
      <Container>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center gap-8 mb-8">
            <div className="relative">
              <button
                onClick={() => setLoanType("personal")}
                className={clsx(
                  "bg-[#FFB600] relative px-4 py-2 rounded-md font-medium ",
                  loanType === "personal" && "ring-2 ring-red-600 ring-inset"
                )}
              >
                Personal Application
              </button>
              {loanType === "personal" && (
                <span class="absolute flex h-3 w-3 top-[-5px] right-[-5px]">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setLoanType("business")}
                className={clsx(
                  "bg-[#201f1f] relative shadow text-[#f7f7f7] px-4 py-2 rounded-md font-medium  ",
                  loanType === "business" && "ring-2 ring-red-600 ring-inset"
                )}
              >
                Business Application
              </button>
              {loanType === "business" && (
                <span class="absolute flex h-3 w-3 top-[-5px] right-[-5px]">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>
          </div>
          <div className="w-[50%] h-[50rem] shadow-lg pl-6 py-6 rounded-lg">
            <div className="overflow-y-auto h-full flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-green-500 scrollbar-track-gray-400">
              <form className="flex flex-col gap-4">
                <h3 className="text-xl font-medium ">Personal Information</h3>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Firstname</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="text"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Lastname</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="text"
                    placeholder="Lastame"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Lastname</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="text"
                    placeholder="Lastname"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Gender</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <SearchableDropdown
                    options={gender}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                  />
                </div>

                <div>
                  <label className="text-sm flex items-center">
                    <span>Marital Status</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <SearchableDropdown
                    options={maritalStatus}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Email</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Primary Phone Number</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      required
                      className="bg-white text-sm border-none outline-none h-8 w-full"
                      type="text"
                      placeholder="Primary phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Alternate Phone Number</span>
                    {/* <LuAsterisk color="#D22B2B" /> */}
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      required
                      className="bg-white text-sm border-none outline-none h-8 w-full"
                      type="text"
                      placeholder="Alternate phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Next of Kin name</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="text"
                    placeholder="Next of kin name"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Next of Kin Phone Nnumber</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                      <Image
                        src="/nigeria.png"
                        alt="nigerian flag"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      <span className="text-sm">+234</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      required
                      className="bg-white text-sm border-none outline-none h-8 w-full"
                      type="text"
                      placeholder="Next of kin phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>How did you hear about us?</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <SearchableDropdown
                    options={hearAboutUs}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>State of Origin</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <SearchableDropdown
                    options={statesData}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>House Address</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <input
                    required
                    className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                    type="text"
                    placeholder="House Address"
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Net Monthly Income</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center justify-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1  px-4 bg-[#f7f7f7] ">
                      <span>₦</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      required
                      className="bg-white text-sm border-none outline-none h-8 w-full"
                      type="text"
                      placeholder="Net Monthly Income"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>How much would you like to borrow?</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <div className="border flex items-center justify-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                    <div className="h-full flex items-center gap-1  px-4 bg-[#f7f7f7] ">
                      <span>₦</span>
                    </div>

                    {/* <MdOutlineEmail color="#979797" /> */}
                    <input
                      required
                      className="bg-white text-sm border-none outline-none h-8 w-full"
                      type="text"
                      placeholder="How much would you like to borrow"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Purpose of the loan</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>
                  <SearchableDropdown
                    options={statesData}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                  />
                </div>
                <div>
                  <label className="text-sm flex items-center">
                    <span>Your Questions or Comments</span>
                  </label>
                  <textarea
                    required
                    className="bg-white text-sm h-20 border  w-full border-solid border-[#d9d9d980]  px-2 py-2 rounded-md outline-none"
                    type="text"
                    style={{
                      resize: "none",
                    }}
                    placeholder="Any questions or comments"
                  />
                </div>

                {loanType === "business" && (
                  <>
                    <h3 className="text-xl font-medium ">
                      Business Information
                    </h3>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business name</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <input
                        required
                        className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                        type="text"
                        placeholder="Business name"
                      />
                    </div>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Type of Business</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <SearchableDropdown
                        options={statesData}
                        label="name"
                        id="id"
                        selectedVal={value}
                        handleChange={(val) => setValue(val)}
                      />
                    </div>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business Address</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <input
                        required
                        className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                        type="text"
                        placeholder="Business name"
                      />
                    </div>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>Business Phone Number</span>
                        <LuAsterisk color="#D22B2B" />
                      </label>
                      <div className="border flex items-center border-solid border-[#d9d9d980] h-10 pr-2  gap-2 rounded-md outline-none">
                        <div className="h-full flex items-center gap-1 px-1 pr-2 bg-[#f7f7f7] ">
                          <Image
                            src="/nigeria.png"
                            alt="nigerian flag"
                            height={20}
                            width={20}
                            className="object-contain"
                          />
                          <span className="text-sm">+234</span>
                        </div>

                        {/* <MdOutlineEmail color="#979797" /> */}
                        <input
                          required
                          className="bg-white text-sm border-none outline-none h-8 w-full"
                          type="text"
                          placeholder="Business Phone number"
                        />
                      </div>
                      <span className="cursor-pointer underline text-sm italic">
                        Click to fill same as above
                      </span>
                    </div>
                    <div>
                      <label className="text-sm flex items-center">
                        <span>CAC Registration Number</span>
                      </label>
                      <input
                        required
                        className="bg-white text-sm  border  w-full border-solid border-[#d9d9d980] h-10 px-2 py-2 rounded-md outline-none"
                        type="text"
                        placeholder="Business Phone number"
                      />
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-1">
                  <label className="text-sm flex items-center">
                    <span>Terms and Conditions</span>
                    <LuAsterisk color="#D22B2B" />
                  </label>

                  <div className="flex items-center gap-3 ">
                    <input
                      required
                      type="checkbox"
                      className="w-4 h-4 rounded !text-[#FFB600]  border-2   hover:ring-0 focus:ring-0   "
                    />
                    <label
                      htmlFor="type"
                      className="text-sm select-none whitespace-nowrap"
                    >
                      I have read and accept the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center my-4">
                  <button className="flex items-center font-semibold gap-3 px-8 py-2 border bg-[#FFB600] shadow rounded-3xl hover:bg-[#282e52] hover:border-[#282e52] hover:text-[#f7f7f7]">
                    <span>Apply</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplicationForm;
