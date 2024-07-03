import React from 'react';
import Header from '../../components/Header';
import { Cuaca } from '../../assets/img/Informasi';
import { Antrian } from '../../assets/img/Informasi/antrean';
export default function Informasi(){
    return(
        <>
        <Header/>
        <div className="bg-[#154C79] h-screen">
        <div className='bg-[#D9D9D9] xl:px-2 relative top-2 xl:h-16 h-10 flex items-center'>
        <p className='px-8 font-semibold xl:text-[26px] text-[18px] text-align-center'>Informasi Terkini</p>
        </div>
        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
        <p className="text-white">Keadaan laut yang menghambat perjalanan pelabuhan dapat disebabkan oleh berbagai faktor, termasuk cuaca buruk, gelombang tinggi, atau kondisi alam lainnya seperti gempa bumi atau tsunami. Ketika perjalanan pelabuhan terhambat, dampaknya bisa sangat signifikan, terutama dalam konteks transportasi laut yang menjadi tulang punggung perdagangan global.</p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center ">
        <img src={Cuaca} alt="Cuaca" className='xl:top-8 h-[220px] relative top-[-10px] rounded-2xl'/>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
        <p className="text-white">Pada tahun 2024, antrian di pelabuhan mengalami peningkatan yang signifikan karena musim mudik Lebaran. Warga yang merayakan Lebaran mulai memadati pelabuhan sejak beberapa hari sebelum Hari Raya untuk pulang ke kampung halaman mereka. Kepadatan lalu lintas dan antrian kendaraan di sepanjang akses menuju pelabuhan menjadi pemandangan umum.</p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center ">
        <img src={Antrian} alt="Cuaca" className='xl:top-12 h-[220px] relative top-[-10px] rounded-2xl'/>
        </div>
        </div>
        </div>
        </>
    )
}