import React from "react";
import { dashboardCardItems } from "../mockData/ArrayCardItem";
import {BreastCancerContext} from '../breastCancer/BreastCancerContext'
import {useContext} from 'react'

const Cards = () => {
  const context=useContext(BreastCancerContext)
  return (
    <div className="flex space-x-2 cursor-pointer ">
      {dashboardCardItems.map((items) => (
        <div  onClick={()=>{
           if(items.id===1){
            context.setDashboardData(true)
            console.log('event triggered')
           }
        }}
          key={items.id}
          className="md:my-1 md:p-4 bg-white md:w-[190px] md:h-[175px] border
          border-gray-300 space-y-5 rounded-lg
          "
        >
          <img
            src={items.icon}
            className={`'md:w-[23] md:h[23] ${items.bgColor} rounded-sm md:p-1   '`}
          />
          <p className="text-Gray text-[16px]">{items.name}</p>
          <p className="font-semibold text-2xl">{items.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
