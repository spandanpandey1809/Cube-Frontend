import React from "react";

interface SingleCustomerProp {
  i: number;
  handleClick: (id: number) => void;
  currCustomer: number;
}

const SingleCustomer: React.FC<SingleCustomerProp> = ({
  i,
  currCustomer,
  handleClick,
}) => {
  return (
    <div
      className={`h-[180px] pt-7 border-b-2 border-r-2 ${
        currCustomer === i
          ? "bg-gray-200 border-r-2 border-right-black"
          : ""
      } p-5 cursor-pointer `}
      onClick={() => handleClick(i)}
    >
      <p className={`text-[20px]`}>Customer {i < 9 ? `0${i + 1}` : i + 1}</p>
      <p className={`text-[14px] mt-4 text-gray-500 font-medium`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime
        velit aliquam pariatur tenetur optio at, dicta fugit eius sequi?
      </p>
    </div>
  );
};

export default SingleCustomer;
