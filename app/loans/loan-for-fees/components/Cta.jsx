import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";

const CTA = () => {
  return (
    <section className="w-full py-20 flex items-center justify-center">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="h-[300px] w-[80%] 2xl:w-[70%] px-12 py-12 rounded-xl bg-[#202441]">
            <div className="w-full flex items-center justify-between h-full">
              <div>
                <h2 className="max-w-lg text-4xl text-[#f7f7f7]">
                  Leading Non-Bank Finance Company
                </h2>
              </div>
              <div className="text-[#f7f7f7] flex items-center gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-5xl font-semibold">50K+</p>
                  <p className="font-light">Active Customers</p>
                </div>
                <div>
                  <Image src="/line.png" height={64} width={64} alt="divider" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-5xl font-semibold">₦100+</p>
                  <p className="font-light">Billion credit processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
