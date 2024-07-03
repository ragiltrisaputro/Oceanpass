import React from "react";
import HeaderAkun from "../../components/Header/HeaderAkun";
import { RxAvatar } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { FcRating } from "react-icons/fc";

export default function Akun() {
  return (
    <>
      <HeaderAkun />
      <div className="bg-[#ffff] h-screen relative">
        <div className="absolute top-16 left-20 items-center justify-center p-5 h-[75%] w-[20%] px-6 border-4 border-[#154C79] rounded-xl bg-[#A3D0E8]">
          <div className="bg-[#EBF9FF]  relative py-2 h-40 rounded-md">
            <h1 className="text-[22px] font-bold px-2">Dhimas Adinanta</h1>
            <div className="flex justify-center">
              <RxAvatar size={90} className="flex items-center mt-4" />
            </div>
          </div>
          <div className="bg-[#EBF9FF] relative top-4 h-40 rounded-md">
            <div className="px-4 py-4">
              <a href="#" className="flex gap-2 items-center py-2"><RxAvatar size={30} className="text-[#154C79]" />Akun</a>
              <a href="#" className="flex gap-2 items-center py-2"><MdPayment size={30} className="text-[#154C79]" />Metode Pembayaran</a>
              <a href="#" className="flex gap-2 items-center"><FcRating size={30} className="text-[#154C79]" />Kumpulan Review</a>
            </div>
          </div>

          <div className="bg-[#EBF9FF] relative top-8 h-40 rounded-md">
            <div className="px-4 py-4">
              <a href="#" className="flex gap-2 items-center py-2"><RxAvatar size={30} className="text-[#154C79]" />Akun</a>
              <a href="#" className="flex gap-2 items-center py-2"><MdPayment size={30} className="text-[#154C79]" />Metode Pembayaran</a>
              <a href="#" className="flex gap-2 items-center"><FcRating size={30} className="text-[#154C79]" />Kumpulan Review</a>
            </div>
          </div>
        </div>
        <div className="bg-[#A3D0E8] absolute top-16 left-80 right-0 mx-auto items-center justify-center h-[28%] w-[65%] p-5 px-6 border-4 border-[#154C79] rounded-3xl">
        <div className="my-2">
        <p className="text-[#154C79] font-inter font-bold text-[20px]">Email & Nomor Ponsel</p>
        </div>
        <div className="flex">
        <div className="bg-[#EBF9FF] relative w-[30%] rounded-2xl mr-52 ml-14">
        <div className="px-4 py-4">
        <p>Nomor Ponsel</p>
        <p>085732574687</p>
        <p className="font-bold">Sudah Diverifikasi</p>
        </div>
        </div>
        <div className="bg-[#EBF9FF] relative w-[30%] rounded-2xl">
        <div className="px-4 py-4">
        <p>Email</p>
        <p>dhimas23@gmail.com</p>
        <p className="font-bold">Sudah Diverifikasi</p>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div className="bg-[#A3D0E8] absolute top-[25rem] left-80 right-0 mx-auto items-center justify-center h-[25%] w-[65%] p-5 px-6 border-4 border-[#154C79] rounded-3xl">
        <div className="my-2">
        <p className="text-[#154C79] font-inter font-bold text-[20px]">Diskon Extra</p>
        </div>
        <div className="flex">
        <div className="bg-[#EBF9FF] relative w-[40%] rounded-2xl mr-52 ml-14">
        <div className="px-4 py-6">
        <p>Pesan 2 dapatkan diskon extra</p>
        <p>Dapatkan</p>
        </div>
        </div>
        <div className="bg-[#EBF9FF] relative w-[40%] rounded-2xl">
        <div className="px-4 py-6">
        <p>Pesan 2 dapatkan diskon extra</p>
        <p>Dapatkan</p>
        </div>
        </div>
        </div>
        </div>
    </>
  );
}
