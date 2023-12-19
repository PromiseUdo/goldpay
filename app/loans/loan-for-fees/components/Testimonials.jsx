import Container from "@/app/components/Container";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col gap-8 my-12">
          <h3 className="text-center text-4xl text-[#505ca4] font-bold">
            Testimonials
          </h3>

          <div className="w-full items-center flex gap-6">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

const TestimonialCard = ({ message, author = "Gbenga" }) => {
  return (
    <div className="border border-[#d9d9d980] flex items-center justify-center p-4 px-8 h-36 rounded-md">
      <p className="italic text-sm leading-relaxed">
        &quot;Goldpay has been very friendly and helpful through out my
        University days&quot; - <span className="font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default Testimonials;
