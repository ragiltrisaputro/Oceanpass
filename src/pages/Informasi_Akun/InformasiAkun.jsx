import React from 'react';
import HeaderAkun from '../../components/Header/HeaderAkun';
import InformasiComponent from '../../components/Informasi/InformasiComponent';
import { Cuaca } from '../../assets/img/Informasi';
import { Antrian } from '../../assets/img/Informasi/antrean';

export default function Informasi(){
    return(
        <>
        <HeaderAkun/>
        <div className="bg-[#ffff] h-screen">
        <div className='bg-[#1a3245] xl:px-2 relative top-2 xl:h-16 h-10 flex items-center'>
        <p className='text-white px-8 font-semibold xl:text-[26px] text-[18px] text-align-center'>Informasi Terkini</p>
        </div>
        <InformasiComponent berita="Keadaan laut yang menghambat perjalanan pelabuhan dapat disebabkan oleh berbagai faktor, termasuk cuaca buruk, gelombang tinggi, atau kondisi alam lainnya seperti gempa bumi atau tsunami. Ketika perjalanan pelabuhan terhambat, dampaknya bisa sangat signifikan, terutama dalam konteks transportasi laut yang menjadi tulang punggung perdagangan global." imgUrl={Cuaca}/>
        <InformasiComponent berita="Pada tahun 2024, antrian di pelabuhan mengalami peningkatan yang signifikan karena musim mudik Lebaran. Warga yang merayakan Lebaran mulai memadati pelabuhan sejak beberapa hari sebelum Hari Raya untuk pulang ke kampung halaman mereka. Kepadatan lalu lintas dan antrian kendaraan di sepanjang akses menuju pelabuhan menjadi pemandangan umum." imgUrl={Antrian}/>
        </div>
        </>
    )
}