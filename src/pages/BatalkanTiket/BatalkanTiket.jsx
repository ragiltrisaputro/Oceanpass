import React, { useState } from "react";
import HeaderAkun from "../../components/Header/HeaderAkun";
import { Tiket } from "../../assets/img/BatalkanTiket";
import ModalRefund from "../../components/Modal/ModalRefund/ModalRefund";

export default function BatalkanTiket() {
    const [openModalRefund, setOpenModalRefund] = useState(false);

    const handleOpenModalRefund = () => {
        setOpenModalRefund(true);
    };

    return (
        <>
            <HeaderAkun/>
            <div className="bg-[#ffff] h-screen overflow-x-hidden">
                <div className="relative px-8 top-4">
                    <p className="xl:text-[35px] text-[24px] font-bold text-[#154C79] mb-6">Pembatalan Tiket</p>
                </div>
                <div className="xl:m-10 m-3.5  xl:flex xl:gap-14 xl:h-[50%]  h-[70%] w-[94%] rounded-3xl border-4 border-[#154C79]  bg-[#A3D0E8]">
                    <div className="">
                        <img src={Tiket} alt="img-tiket" className="xl:h-[365px] rounded-2xl " />
                    </div>
                    <div className="relative p-2 xl:top-5">
                        <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Penyebrangan Asal Tanjung Balai Karimun - Bawean 1</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Tanggal : 21 Maret 2024</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Waktu : 07 : 30 - 10 : 30</p>
            <p className="xl:text-[22px] text-[16px] font-bold xl:mb-2">Penumpang</p>
            <p className="xl:text-[18px] text-[12px] xl:mb-2">Dewasa : 1 </p>
            <p className="xl:text-[18px] text-[12px] xl:mb-2">Balita : </p>
                        <div className="relative xl:top-14 xl:left-96 left-40">
                            <button onClick={handleOpenModalRefund} className="bg-[#154C79] text-white font-bold py-3 px-6 rounded-full">
                                Batalkan Pesanan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalRefund style={{ zIndex: '999999' }} open={openModalRefund} onClose={() => setOpenModalRefund(false)} title="Batalkan Tiket">
                <div className={'flex flex-wrap'}>
                </div>
            </ModalRefund>
        </>
    );
}
