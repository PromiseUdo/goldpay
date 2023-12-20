"use client";

import BreadCrumb from "@/app/components/BreadCrumb";
import Container from "@/app/components/Container";
import React from "react";

const PageIntro = ({ title, description }) => {
  return (
    <section className="w-full bg-[#202441] flex items-center mb-12 h-52">
      <Container>
        <div
          className="text-[#f7f7f7] w-full flex flex-col gap-3
        "
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[#f7f7f7] text-4xl">{title}</h1>
            <p className="text-[#f7f7f7] ">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageIntro;
