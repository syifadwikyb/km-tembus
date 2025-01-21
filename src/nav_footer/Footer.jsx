import Logo from "./../assets/logo_kmtembus.png";

export default function Footer() {
    return(
        <div className="static bottom-0 mx-auto bg-primary mt-10 text-white">
            <div className="mx-auto border-b-white border-y">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 p-5">
                        <div className="col-span-1 md:col-span-1 lg:col-span-4">
                            <div className="flex gap-3 mb-6 justify-center md:justify-start">
                                <img className="w-1/6 lg:w-1/4" src={Logo}/>
                                <img className="w-1/6 lg:w-1/4" src={Logo}/>
                                <img className="w-1/6 lg:w-1/4" src={Logo}/>
                            </div>
                            <div className="flex flex-col text-center md:text-left">
                                <p className="text-lg md:text-2xl font-bold mb-3 text-white">Ikuti</p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <img className="w-1/12 lg:w-1/6" src={Logo}/>
                                    <img className="w-1/12 lg:w-1/6" src={Logo}/>
                                    <img className="w-1/12 lg:w-1/6" src={Logo}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-1 lg:col-span-3">
                            <ul className="list-none space-y-2 lg:space-y-4 text-center lg:text-left">
                                <li>
                                    <a href="#" className="text-base lg:text-xl text-white hover:underline hover:text-blue-600 transition-colors duration-300">
                                        Tentang KM TEMBUS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base lg:text-xl text-white hover:underline hover:text-blue-600 transition-colors duration-300">
                                        Visi & Misi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base lg:text-xl text-white hover:underline hover:text-blue-600 transition-colors duration-300">
                                        Dokumentasi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base lg:text-xl text-white hover:underline hover:text-blue-600 transition-colors duration-300">
                                        Rekomendasi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base lg:text-xl text-white hover:underline hover:text-blue-600 transition-colors duration-300">
                                        Bidang
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-5">
                            <iframe className="w-full h-48 md:h-60 lg:h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.935992122658!2d110.43872833916379!3d-7.059588774802057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f2f3a71bdff%3A0xdf569bd396b1179!2sBasecamp%20Keluarga%20Mahasiswa%20Tembalang%20Kudus!5e1!3m2!1sid!2sid!4v1735748992879!5m2!1sid!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p className="text-sm lg:text-lg text-white mt-4 text-center lg:text-left">
                                Alamat: Jl. Timoho I No.13A, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg text-center p-4 text-white">Hak Cipta © 2024 KM_TEMBUS. Terima
                kasih telah mengunjungi!
            </p>
        </div>
    )
}