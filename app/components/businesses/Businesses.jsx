import React from "react";
import Container from "../Container";
import Businsess from "./components/Businsess";

const businesses = [
  {
    image: "/loan.jpg",
    title: "Loans",
    desc: "Need funds for life's opportunities? Get up to ₦100 Million with our hassle-free, collateral-free Personal & Business loans. We guarantee swift approval for eligible salary earners in private and public sectors. Embrace life's chances with Goldpay Investment today!",
    list: [
      "Personal Loan",
      "Business Support Loan",
      "Education Support Loan",
      "Pubic Sector Loan",
    ],
    buttonCaption: "Apply Now",
  },
  {
    image: "/investment.jpg",
    title: "Investment",
    desc: "Whether you're looking to grow your wealth, live your best life, or retire wealthy, we're here to support you every step of the way. Let us help you embark on a journey to financial success, one step at a time.",
    list: [
      "Goldpay Bronze - 2%",
      "Goldpay Silver - 3%",
      "Goldpay Platinum - 5%",
    ],
    buttonCaption: "Invest Now",
    row: true,
  },
  {
    image: "/repayment.jpg",
    title: "Easy Repayment",
    desc: "We have flexible and convenient repayment plan that is aligned according to your income",
    list: [
      "Loan repayment option 1",
      "Loan repayment option 2",
      "Loan repayment option 3",
    ],
    buttonCaption: "Learn More",
  },
];

const Businesses = () => {
  return (
    <section className="bg-[#f2f2f2] w-full py-8">
      <Container>
        <div className="py-12">
          <h2 className="text-[#505ca4] font-semibold text-4xl leading-relaxed">
            Our Services Tailored For Your Needs
          </h2>
          <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>

          <div className="flex flex-col items-center justify-center w-full">
            {businesses.map((_, idx) => (
              <Businsess
                key={idx}
                image={_.image}
                title={_.title}
                desc={_.desc}
                list={_.list}
                row={_.row}
                buttonCaption={_.buttonCaption}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Businesses;
