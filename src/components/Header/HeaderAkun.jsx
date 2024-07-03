import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RxAvatar } from "react-icons/rx";


export default function HeaderAkun() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border border-b-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="font-bold text-[#154C79] text-[25px]">Oceanpass</span>
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
            <a href="./beranda" className="text-m leading-6 text-[#154C79]" onClick={closeMobileMenu}>
              Beranda
            </a>
            <a href="./batalkan-tiket" className="text-m leading-6 text-[#154C79]">
              Batalkan Tiket
            </a>
            <a href="./informasi213" className="text-m leading-6 text-[#154C79]" onClick={closeMobileMenu}>
              Informasi
            </a>
            <a href="./pesanan-ku" className="text-m leading-6 text-[#154C79]">
              Pesanan-Ku
            </a>
          </Popover.Group>
          <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
            <a href="/akun" className="gap-2 text-[18px] bg-transparent hover:bg-[#154C79] text-[#154C79] font-bold hover:text-white py-2 px-6 border-4 border-[#154C79] hover:border-black rounded-full flex items-center">
            <RxAvatar size={28} className='flex'/> AKUN </a>
            </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="./" className="-m-1.5 p-1.5">
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
                    href="./batalkan-tiket" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Batalkan Tiket
                  </a>
                  <a
                    href="./informasi213"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    Informasi
                  </a>
                  <a
                    href="./pesanan-ku" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pesanan-Ku
                  </a>
                </div>
                <div className="py-2">
                  <button className="bg-[#154C79] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>AKUN</span>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

