"use client";

import BreadCrumb from "@/app/components/BreadCrumb";
import Container from "@/app/components/Container";
import React from "react";

const PageBanner = ({ title, description }) => {
  return (
    <section className="w-full bg-[#202441] flex items-center mb-12 h-52">
      <Container>
        <div
          className=" w-full flex flex-col gap-3
        "
        >
          {/* <BreadCrumb /> */}

          <BreadCrumb />

          <div className="flex flex-col gap-2">
            <h1 className="text-[#f7f7f7] text-4xl">{title}</h1>
            <p className="text-[#f7f7f7] ">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageBanner;
