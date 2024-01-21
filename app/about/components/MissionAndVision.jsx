import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const styles = "leading-relaxed text-sm ";
const MissionAndVision = () => {
  return (
    <div className="w-full my-16">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="w-full lg:w-[80%]  flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Mission and Vision</h3>

            <div className="w-full flex flex-col md:flex-row items-center gap-12">
              <div className="  py-4 2xl:py-12 px-8 w-full lg:w-[50%] h-[fit-content] md:h-64  flex flex-col gap-2 bg-gradient-to-r border border-blue-100 from-blue-200  to-white rounded-xl">
                <Image
                  src="/mission.png"
                  height={64}
                  width={64}
                  alt="mission icon"
                  className="object-contain"
                />
                <h4 className="font-semibold">Mission</h4>
                <p className={styles}>
                  Our mission as a company is to meet the financial need of our
                  customers by providing competitive personal financial products
                  and services, and maximizing our shareholder&apos;s wealth
                  while maintaining the highest ethical standard in corporate
                  behavior.
                </p>
              </div>
              <div className="py-4 2xl:py-12 px-8 w-full  lg:w-[50%] h-[fit-content] md:h-64 flex flex-col gap-2 bg-gradient-to-r border border-green-100  from-green-200 to-white rounded-xl">
                <Image
                  src="/vision.png"
                  height={64}
                  width={64}
                  alt="mission icon"
                  className="object-contain"
                />
                <h4 className="font-semibold">Vision</h4>
                <p className={styles}>
                  Our vision is to be a contemporary and vibrant financial
                  services provider, a strong and compelling Brand with
                  excellent service delivery where the needs of the people are
                  the focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionAndVision;
