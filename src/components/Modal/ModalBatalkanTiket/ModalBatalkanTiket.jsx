import { ImgModal } from "../../assets/img/Modal";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function ModalBatalkanTiket({ open, onClose, children, title, style }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[40000] ${open ? 'block' : 'hidden'}`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#154C79] opacity-70`}></div>
                <div className={`bg-white  rounded-3xl shadow-lg z-50 overflow-hidden flex`}>
                    <div className="w-1/2">
                        <img src={ImgModal} alt="Login" className=" hidden md:block max-w-full h-auto" />
                    </div>
                    <div className="w-full xl:w-1/2 p-6">
                        <div className={`flex justify-end mb-2`}>
                            <button onClick={onClose} className={`text-4xl md:text-5xl text-gray-800 active:text-gray-400`}>×</button>
                        </div>
                        <div className="flex justify-center mb-3">
                        <p className="font-bold text-[#154C79] text-[24px]">DAFTAR</p>
                        </div>
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input type="email" id="email" name="email" className=" w-full border border-black rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" required />
                            </div>
                            <div className="mb-6">
                                <input type="password" id="password" name="password" className="w-full border border-black rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" required />
                            </div>
                            <div className="mb-6">
                                <input type="password" id="password" name="password" className="w-full border border-black rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Konfirmasi Password" required />
                            </div>
                            <div className="relative mb-4 flex justify-center gap-2">
                            <FaGoogle size={35}/>
                            <FaFacebook size={35} />
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="p-2 bg-[#154C79] w-36 rounded-md text-white cursor-pointer font-bold text-xl hover:bg-[#154C79] hover:opacity-80">MASUK</button>
                            </div>
                        </form>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
