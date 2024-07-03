import React from "react";
import { Cuaca } from "../../assets/img/Informasi";

export default function InformasiComponent(props){
    return(
        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
        <p className="text-[#154C79] xl:px-20 xl:text-[18px] font-inter ">{props.berita}</p>
        </div>
        <div className="lg:w-1/2 flex justify-center ">
        <img src={props.imgUrl} alt={props.altText} className='xl:top-8 xl:h-[250px] h-[220px] relative top-[-10px] mb-4 rounded-xl'/>
        </div>
        </div>
    )
}