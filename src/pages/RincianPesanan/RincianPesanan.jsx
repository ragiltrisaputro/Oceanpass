import React from "react";
import {Button} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function RincianPesanan(){
        const navigate = useNavigate();

    const handleClick = () => {
    navigate("/pesanan-ku");
    };
    return(
        <div className="bg-white h-screen overflow-x-hidden">
        <div className="xl:flex h-screen">
        <div className="xl:m-10 m-3  xl:flex xl:gap-14 xl:h-[35%] h-[70%] xl:w-[50%] rounded-3xl border-4 border-[#33C2FF]  bg-[#A3D0E8]">
        <div className="font-inter relative pl-14 top-4">
        <h1 className="text-[25px] font-bold mb-2">Kouta Penumpang (600)</h1>
        <h2 className="text-[20px] font-bold text-[#154C79] mb-2">Tanjung Balai Karimun - Belawan 1</h2>
        <p className="font-semibold text-[18px] mb-2">Jadwal Keberangkatan</p>
        <p className="font-semibold text-[18px] mb-2">Kamis, 21 maret 2024</p>
        <p className="font-semibold text-[18px] mb-2">07 : 30 - 10 : 30</p>
        <p className="font-semibold text-[18px] mb-2">Layanan : Reguler</p>
        </div>
        </div>
        <div className="xl:m-10 m-3  xl:flex xl:gap-14 xl:h-[50%] h-[70%] xl:w-[40%] rounded-3xl border-4 border-[#33C2FF]  bg-[#A3D0E8]">
        <div className="font-inter relative pl-14 top-4">
        <h1 className="text-[25px] font-bold mb-2">Rincian Pemesanan</h1>
        <p className="font-semibold text-[18px] mb-2">Penumpang</p>
        <p className="font-semibold text-[18px] mb-2 indent-8">Dewasa  x 1 <span className="ml-10"> :</span> Rp. 50.000</p>
        <p className="font-semibold text-[18px] mb-2">Kendaraan</p>
        <p className="font-semibold text-[18px] mb-2 indent-8">Gol II       x 1     <span className="ml-16"> :</span> Rp. 150.000</p>
        <div className=" h-0.5 bg-black"></div>
        <p className="font-semibold text-[18px]">Metode Pembayaran<span className="ml-16"> Transfer Bank</span></p>
        <h1 className="xl:text-[25px] font-bold mt-8">TOTAL PESANAN <br/> Rp. 200.000 </h1>
        <div className="relative top-[-70px] left-44 xl:left-60">
        <Button onClick={handleClick} className="font-inter text-[20px] xl:px-14 xl:py-4 bg-[#123548] rounded-3xl">
          Pesan
        </Button>
        </div>
        </div>
        </div>
        
        </div>
        </div>
    )
}