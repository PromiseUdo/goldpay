import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const PageContent = () => {
  return (
    <div className="w-full py-12">
      <Container>
        <div className="w-full flex items-center flex-col gap-8 ">
          <Image
            src="/job_hunt.gif"
            height={280}
            width={280}
            className="object-contain"
            alt="job_hunt_gif"
          />
          <h4 className="text-4xl font-semibold">
            Thank you for your interest in working with Us.
          </h4>

          <p className="">
            Unfortunately, there are no open positions at this time
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PageContent;
