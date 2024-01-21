import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, answer }) => {
  return (
    <div className="pt-[10px]">
      <div
        onClick={toggle}
        className="bg-[#f7f7f7] py-[25px] px-[10px] lg:px-[50px] shadow rounded-lg flex justify-between items-center cursor-pointer"
      >
        <p className="text-lg lg:text-xl font-semibold ">{title}</p>

        <div className="text-lg lg:text-xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white rounded-b-lg shadow px-[50px] py-[20px]">
          {answer}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
