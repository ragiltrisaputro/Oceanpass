import Card from "../../components/Card/Card"
import { KapalFeri } from "../../assets/img/Card/KapalFeri"
import { Tiket } from "../../assets/img/BatalkanTiket"

export default function DaftarPerjalanan(){
    return(
        <>
        <div className="bg-[#ffff] h-screen">
        <div className="font-inter text-[#154C79] relative top-12">
        <h1 className="flex justify-center font-bold xl:text-[24px] text-[16px]">Resources and inisights</h1>
        <p className="flex justify-center relative top-2 font-bold xl:text-[16px] text-[12px]">Kategori pemilihan deskripsi dan jenis kapal</p>
        </div>
        <div className="xl:flex relative top-32">
        <Card cardImg={KapalFeri}/>
        <Card cardImg={Tiket}/>
        <Card cardImg={KapalFeri}/>
        </div>
        <div className="xl:flex relative top-32">
        <Card cardImg={KapalFeri}/>
        <Card cardImg={Tiket}/>
        <Card cardImg={KapalFeri}/>
        </div>
        </div>
        </>
    )
}