import Container from "@/app/components/Container";
import React from "react";

const Footer = () => {
  return (
    <div
      id="copyright"
      className="mt-12 w-full py-8 bg-[#505ca4] border-t border-shopday-darkgray"
    >
      <Container>
        <div className="text-[#f7f7f7] w-full h-full flex items-center justify-center">
          <p className=" text-sm tracking-wider">
            Copyright &copy; 2024 goldpayinvestment.com All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
