import React from "react";
export default function InputRefundTiket(props){
    return(
     <div className="flex justify-center relative">
      <input placeholder={props.placeholder} className="text-center font-bold font-inter mt-4 px-16 py-4 bg-white shadow-sm placeholder-black rounded-md sm:text-sm border-2 border-[#006B99]" />
      </div>
    )
}