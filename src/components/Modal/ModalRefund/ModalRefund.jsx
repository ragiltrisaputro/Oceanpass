import React from "react";
import { useNavigate } from 'react-router-dom';
import InputRefundTiket from "../../InputRefundTiket/InputRefundTiket";

export default function ModalRefund({ open, onClose }) {
      const handleSubmit = (e) => {
        e.preventDefault();
    };
    const navigate = useNavigate();
    const handleClick = () => {
    navigate("/batalkan-tiket-sukses");
    };
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[40000] ${open ? 'block' : 'hidden'}`}>
      <div className={`absolute top-0 left-0 w-full h-full bg-[#ffff] opacity-70`}></div>
      <div className={`bg-[#A3D0E8] rounded-3xl z-50 xl:h-[90%] xl:w-[90%] border-4 border-[#006B99] `}>
      <div className={`flex justify-end p-4`}>
        <button onClick={onClose} className={`text-4xl md:text-5xl text-gray-800 active:text-gray-400`}>×</button>
      </div>
      <InputRefundTiket />
      <InputRefundTiket placeholder="KTP/SIM/Paspor" />
      <InputRefundTiket placeholder="Detail Informasi Rekening"/>
      <InputRefundTiket placeholder="STNK Kendaraan"/>
              <div className=" h-0.5 bg-black mt-4"></div>
      <div className="flex justify-center my-4">
      <p>Proses Refund max 5 Hari</p>
      </div>
      <div className="flex items-center justify-center mt-4">
            <button onClick={handleClick} type="submit" className="p-2 bg-[#154C79] w-36 rounded-md text-white cursor-pointer font-bold text-xl hover:bg-[#154C79] hover:opacity-80">Ajukan</button>
      </div>
      </div>
    </div>
  );
}

