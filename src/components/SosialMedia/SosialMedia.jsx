import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export default function SosialMedia(){
    return(
        <>
        <a href="#"><LuInstagram size={30} className="text-white"/></a>
        <a href="#"><FaWhatsapp size={30} className="text-white"/></a>
        <a href="#"><FaTiktok size={30} className="text-white"/></a>
        <a href="#"><FaFacebook size={30} className="text-white"/></a>
        </>
    )
}