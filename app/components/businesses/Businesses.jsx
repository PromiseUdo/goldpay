import React from "react";
import Container from "../Container";
import Businsess from "./components/Businsess";

const businesses = [
  {
    image: "/loan.jpg",
    title: "Loans",
    desc: " Our investment company offers loans for small and medium enterprises, school fees, and salary earners. Our streamlined application process ensures that you can get the funds you need quickly and easily. Contact us today to learn more about our loan services and how we can help you achieve your goals!",
    list: [
      "Loan for SMEs",
      "Loan for School fees",
      "Loan for salary earners",
      "Cash advance",
    ],
    buttonCaption: "Apply Now",
    url: "/application/loan",
  },
  {
    image: "/investment.jpg",
    title: "Fund Management",
    desc: "We offer professional fund management services to help our clients achieve their financial goals. Our team of experienced fund managers provides expert advice and personalized services to help you maximize your returns while minimizing your risks.",
    list: [],
    buttonCaption: "Learn More",
    row: true,
    url: "/contact",
  },
  {
    image: "/lady.jpg",
    title: "Business Consultancy",
    desc: " Our investment company offers expert business consultancy services to help our clients grow and succeed. Our team of experienced consultants provides personalized advice and guidance to help you make informed business decisions and achieve your goals. Whether you need help with business strategy, financial management, or any other aspect of your business, we are here to help. ",
    list: [],
    buttonCaption: "Learn More",
    url: "/contact",
  },
];

const Businesses = () => {
  return (
    <section className="bg-[#f2f2f2] w-full py-8">
      <Container>
        <div className="py-6 lg:py-12">
          <h2 className="text-[#505ca4] font-semibold text-2xl lg:text-4xl leading-relaxed">
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
                url={_.url}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Businesses;
