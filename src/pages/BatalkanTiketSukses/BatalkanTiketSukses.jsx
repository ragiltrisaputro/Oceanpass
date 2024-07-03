import HeaderAkun from "../../components/Header/HeaderAkun"
import { Tiket } from "../../assets/img/BatalkanTiket"
export default function BatalkanTiketSukses(){
    return(
        <>
        <HeaderAkun/>
        <div>
        <div className="flex flex-col justify-center items-center min-h-screen mt-[-80px]"> {/* Menambahkan padding atas untuk header */}
        <div className="bg-[#A3D0E8] h-12 w-[70%] flex justify-center items-center border-[] border-tl-lg rounded-tl-lg rounded-tr-lg">
        <h1 className="font-inter font-bold text-[20px]">Proses Pembatalan</h1>
        </div>
        <div className="w-[70%] h-72 flex border-2 border-black">
        <div className="">
        <img src={Tiket} alt="img-tiket" className="xl:h-[150px] m-14  rounded-2xl " />
        </div>
        <div className="w-[50%]">
        <div className="relative p-2 top-5">
        <p className="xl:text-[16px] text-[16px] font-bold flex justify-end items-end">Sedang diproses</p>
        <p className="xl:text-[16px] text-[16px] mb-2">Dhimas (k2/tipe ferry)</p>
        <p className="xl:text-[16px] text-[16px] mb-2">Dewasa <span className="ml-44"></span> Rp. 200.000</p>
        <p className="xl:text-[16px] text-[16px] mb-2">Biaya Pembatalan (20%) <span className="ml-16"></span> Rp. 40.000</p>
        <div className=" h-0.5 bg-black mb-2"></div>
        <p className="xl:text-[16px] text-[16px]">Total Pengembalian Dana <span className="ml-14"></span> Rp. 160.000</p>
        </div>
        </div> 
        </div>
        </div>


        </div>
        </>
    )
}