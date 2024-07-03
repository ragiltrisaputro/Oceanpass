import HeaderAkun from "../../components/Header/HeaderAkun";
import { Coverbg } from "../../assets/img/home";
import SosialMedia from "../../components/SosialMedia/SosialMedia";
import Search from "../../components/Search/Search";
import SearchTujuan from "../../components/Search/SearchTujuan";
import SearchButton from "../../components/Search/SearchButton";
import DatePiker from "../../components/Search/DatePiker";

export default function Akun() {
  return (
    <>
      <HeaderAkun />
      <div>
        <img
          src={Coverbg}
          alt="imgage-bg"
          className="xl:h-screen xl:w-full h-[90vh] fixed bg-repeat bg-center bg-contain"
        />
        <div className="xl:w-[55%] xl:h-60 xl:top-36 relative items-center justify-center  top-16 p-5 w-[90%] px-6 rounded-r-xl bg-[#607273] bg-opacity-50">
          <div className="relative">
            <div className="xl:left-20 w-20 h-0.5 bg-white relative"></div>
          </div>
          <p className="relative font-inter italic top-[-15px] pl-24 xl:pl-44 text-white font-bold xl:text-[25px] text-[16px]">
            Indahnya Pelabuhan
          </p>
          <p className="relative font-inter italic top-[-15px] xl:text-[48px] text-white text-[20px] font-bold px-6">
            PEMBELIAN TIKET CEPAT
          </p>
          <p className="relative font-inter italic top-[-15px] xl:text-[48px] text-white text-[20px] font-bold px-6">
            DAN TERPERCAYA
          </p>
          <div className="w-20 h-0.5 bg-white"></div>
        </div>

        <div className="relative top-[4rem] xl:top-[15rem]">
          <div className="px-10 xl:flex gap-[65px] xl:px-[20rem]">
            <Search />
            <SearchTujuan />
          </div>
        </div>

        <div className="xl:absolute relative top-[-15px] left-[-55px] xl:top-[31rem] xl:left-[46rem]">
          <DatePiker />
        </div>

        <div className="relative left-10 top-[-95px] xl:absolute xl:top-[37rem] xl:left-[68rem]">
          <SearchButton />
        </div>

        <div className="relative top-[-2rem] xl:top-[13.5rem]">
          <p className="text-white px-8">Hubungi Kamii :</p>
          <div className="flex px-8 gap-2 py-2 ">
            <SosialMedia />
          </div>
        </div>
      </div>
    </>
  );
}
