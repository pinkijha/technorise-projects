import React from "react";
import { dashboardCardItems } from "../mockData/ArrayCardItem";

const Cards = () => {
  return (
    <div className="flex space-x-2 cursor-pointer ">
      {dashboardCardItems.map(({ id, name, icon, amount, bgColor }) => (
        <div
          key={id}
          className="md:my-1 md:p-4 bg-white md:w-[190px] md:h-[175px] border
          border-gray-300 space-y-5 rounded-lg
          "
        >
          <img
            src={icon}
            className={`'md:w-[23] md:h[23] ${bgColor} rounded-sm md:p-1   '`}
          />
          <p className="text-Gray text-[16px]">{name}</p>
          <p className="font-semibold text-2xl">{amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
