export default function ModalBatal({ open, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[40000] ${open ? 'block' : 'hidden'}`}>
      <div className={`absolute top-0 left-0 w-full h-full bg-[#154C79] opacity-50`}></div>
      <div className={`bg-white rounded-3xl shadow-lg z-50 overflow-hidden flex w-90% xl:w-full max-w-md`}>
        <div className="py-4 px-6 w-full">
          <div className="flex justify-center mb-3">
            <p className="font-bold text-[#154C79] xl:text-[45px] text-[30px]">Oops!</p>
          </div>
          <div className="flex justify-center mb-3">
            <p className="text-[#154C79] xl:text-[25px] text-[18px]">Sepertinya Anda belum login.</p>
          </div>
          <div className="flex items-center justify-center">
            <button type="button" onClick={onClose} className="px-4 py-1 xl:p-2 bg-[#154C79] xl:w-36 rounded-md text-white cursor-pointer font-bold text-md xl:text-xl hover:bg-[#154C79] hover:opacity-80">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

