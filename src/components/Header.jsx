import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ModalLogin from './Modal/ModalLogin';
import ModalBatal from './Modal/ModalBatal/ModalBatal';
import ModalDaftar from './Modal/ModalDaftar/ModalDaftar';
import { LogoBrand } from '../assets/img/LogoBrand/LogoBrand';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openBatalModal, setOpenBatalModal] = useState(false);
  const [openDaftarModal, setOpenDaftarModal] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openModalLogin = () => {
    setOpenLoginModal(true);
    setMobileMenuOpen(false);
  };
 
  const openModalBatal = () => {
    setOpenBatalModal(true);
    setMobileMenuOpen(false);
  };

  const openModalDaftar = () => {
    setOpenDaftarModal(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={LogoBrand} alt="Logobrand" className='h-10' />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#154C79]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:justify-end">
            <a href="./" className="font-inter text-m leading-6 text-[#154C79]">
              Beranda
            </a>
            <a href="#" onClick={openModalBatal} className="font-inter text-m leading-6 text-[#154C79]">
              Batalkan Tiket
            </a>
            <a href="./informasi" className="font-inter text-m leading-6 text-[#154C79]">
              Informasi
            </a>
            <a href="#" onClick={openModalBatal} className="font-inter text-m leading-6 text-[#154C79]">
              Pesanan-Ku
            </a>
          </Popover.Group>
          <div className=" hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
            <button onClick={openModalLogin} className="bg-[#154C79] hover:bg-[#154C79] hover:opacity-90 font-inter text-white font-bold py-2 px-8 rounded-full">
              MASUK
            </button>
            <button onClick={openModalDaftar} className="bg-transparent hover:bg-[#154C79] text-[#154C79] font-inter font-bold hover:text-white py-2 px-8 border-4 border-[#154C79] hover:border-black rounded-full">
              DAFTAR
            </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-bold text-black text-[25px]">Oceanpass</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 z-10 relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="./"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    onClick={openModalBatal} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Batalkan Tiket
                  </a>
                  <a
                    href="./informasi"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    Informasi
                  </a>
                  <a
                    href="#"
                    onClick={openModalBatal} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pesanan-Ku
                  </a>
                </div>
                <div className="py-2 px-16">
                  <button onClick={openModalLogin} className="bg-[#154C79] text-white font-bold py-2 px-4 rounded inline-flex items-center mr-4">
                    <span>MASUK</span>
                  </button>
                  <button onClick={openModalDaftar} className="bg-[#154C79] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>DFTAR</span>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <ModalLogin style={{ zIndex: '999999' }} open={openLoginModal} onClose={() => setOpenLoginModal(false)} title="COMING SOON">
        <div className={'flex flex-wrap'}>
        </div>
      </ModalLogin>
      <ModalBatal style={{ zIndex: '999999' }} open={openBatalModal} onClose={() => setOpenBatalModal(false)} title="Batalkan Tiket">
        <div className={'flex flex-wrap'}>
        </div>
      </ModalBatal>
      <ModalDaftar style={{ zIndex: '999999' }} open={openDaftarModal} onClose={() => setOpenDaftarModal(false)} title="Daftar">
        <div className={'flex flex-wrap'}>
        </div>
      </ModalDaftar>
    </>
  );
}
