import React from "react";
import { Tiket } from "../../assets/img/BatalkanTiket";
import { useNavigate } from 'react-router-dom';
import {Button} from "@material-tailwind/react";
import Chexbok1 from '../../components/Checkbox/Chexbok1';
import Chexbok2 from "../../components/Checkbox/Chexbok2";
export default function DetailInformasi(){
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/rincian-pesanan");
    };

    return(
        <>
        <div className="bg-white h-screen overflow-x-hidden">
        <div className="relative top-4 xl:left-12 left-4 ">
        <h1 className="text-[#154C79] font-inter text-[20px] xl:text-[28px] font-bold ">Informasi Perjalanan</h1>
        </div>
        <div className="xl:m-10 m-3  xl:flex xl:gap-14 xl:h-[30%] h-[70%] xl:w-[80%] w-[94%] rounded-3xl border-4 border-[#154C79]">
            <div className="">
                <img src={Tiket} alt="img-tiket" className="xl:h-[200px] rounded-2xl relative m-2" />
            </div>
        <div className="relative  p-5 font-inter text-[#154C79]">
            <p className="xl:text-[25px] text-[16px] font-bold mb-2">Asal -    : Tanjung Balai Karimun </p>
            <p className="xl:text-[25px] text-[16px] font-bold mb-2">Tujuan -  : Belawan 1</p>
            <p className="xl:text-[25px] text-[16px] font-bold mb-2">Tanggal   : Kamis, 21 maret 2024 </p>
            <p className="xl:text-[25px] text-[16px] font-bold mb-2">Waktu     : 07 : 30 -  10 : 30 </p>
         </div>
        </div>

        <div className="xl:m-10 m-3  xl:gap-14 xl:h-[35%] h-[70%] w-[94%] rounded-3xl border-4 border-[#154C79]  bg-[#A3D0E8]">
        <h1 className="text-[#154C79] font-inter text-[20px] xl:text-[20px] font-bold relative m-4  left-6">Jenis Pengguna Jasa</h1>
        <div className="w-[30%] relative left-5">
        <Chexbok1/>
        <div className="relative top-3">
        <Chexbok2/>
        </div>
        </div>
        </div>

        <div className="flex justify-end pb-5 pr-10">
        <Button
          onClick={handleClick}
          className="font-inter text-[20px] xl:px-14 xl:py-4 bg-[#123548] rounded-3xl"
        >
          Pesan
        </Button>
        </div>

        </div>
        </>
    )
}