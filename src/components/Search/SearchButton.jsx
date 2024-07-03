import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchButton() {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/daftar-perjalanan");
  };
  return (
    
    <>
    <button onClick={handleClick} className="bg-[#154C79] hover:bg-white hover:bg-opacity-5 text-white font-bold px-8 py-2 rounded-md border border-white">
    Cari
    </button>
    </>
  );
}
