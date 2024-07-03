import React from "react";
import HeaderAkun from "../../components/Header/HeaderAkun";
import { Tiket } from "../../assets/img/BatalkanTiket";
import { BarcodePerjalanan } from "../../assets/img/Barcode/BarcodePerjalanan";

export default function PesananKu() {
  return (
    <>
      <HeaderAkun />
      <div className="bg-[#ffff] h-screen">
        <div className="relative top-4 xl:left-12 left-4 pb-4">
          <h1 className="text-[#154C79] font-inter text-[20px] xl:text-[28px] font-bold "> Pesananku :</h1>
        </div>
        <div className="xl:m-10 m-3  xl:flex xl:gap-14 xl:h-[50%] h-[70%] rounded-3xl border-4 border-[#154C79]  bg-[#A3D0E8]">
          <div className="">
            <img src={Tiket} alt="img-tiket" className="xl:h-[365px] w-auto rounded-2xl " />
          </div>
          <div className="relative p-2 top-2">
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Penyebrangan Asal Tanjung Balai Karimun - Bawean 1</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Tanggal : 21 Maret 2024</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Waktu : 07 : 30 - 10 : 30</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Penumpang</p>
            <p className="xl:text-[18px] text-[12px] xl:mb-2">Dewasa : 1 </p>
            <p className="xl:text-[18px] text-[12px] xl:mb-2">Balita : </p>
            <img src={BarcodePerjalanan} alt="" className="xl:h-14 h-10 left-40 relative xl:top-10 xl:left-[300px]" />
          </div>
        </div>
      </div>
    </>
  );
}
