import Container from "@/app/components/Container";
import React from "react";
import { MdChevronRight } from "react-icons/md";

const requirements = [
  "Utility Bill (not older than 3 months)",
  "Two (2) Guarantors and their means of identification",
  "Proof of residence. i.e. House receipt/Shop or Rent Receipt",
  "Three (3) months Bank Statement",
  ,
  "Means of Identification (e.g. NIN, Driver's licence, Passport)",
  "One Passport photograph",
];
const PageContent = () => {
  return (
    <div>
      <Container>
        <div className="w-full flex gap-12">
          <div className="w-[50%] flex flex-col gap-2">
            <p className="leading-relaxed">
              Our loan service for students is designed to help cover your
              school fees and ease the financial burden of pursuing your
              education. With flexible repayment options and competitive
              interest rates, we make it easy for you to focus on your studies
              without worrying about the cost. Apply now and get the funds you
              need to achieve your academic goals.
            </p>

            <p className="leading-relaxed mt-4">Find our requirements below:</p>

            <ul className=" flex flex-col gap-2">
              {requirements.map((item, i) => (
                <li key={i} className="leading-relaxed flex items-center gap-1">
                  <MdChevronRight /> {item}
                </li>
              ))}
            </ul>

            <div className="w-full my-4">
              <button className="min-w-[150px] shadow-md bg-[#FFB600] text-[black] px-4 py-2 rounded-3xl text-base hover:bg-[#282e52] transition-all duration-100 font-semibold hover:text-[#f7f7f7] uppercase">
                {"Click here to Apply"}
              </button>
            </div>
          </div>
          <div className="w-[50%] bg-red-400">
            <h3 className="text-3xl font-semibold ">Other Loan Optons</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageContent;
