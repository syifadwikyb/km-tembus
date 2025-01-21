import logo from './../assets/logo_kmtembus.png';

export default function Hero() {
    return(
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex-1 flex justify-center lg:order-2 mb-6 lg:mb-0 px-4">
                <div className="flex flex-col items-center">
                    <img className="w-1/2 md:w-2/5 lg:w-3/5 mb-6" src={logo} alt="" />
                    <div className="flex gap-4 justify-center">
                        <img className="w-12 md:w-16 lg:w-1/6" src={logo} alt="" />
                        <img className="w-12 md:w-16 lg:w-1/6" src={logo} alt="" />
                        <img className="w-12 md:w-16 lg:w-1/6" src={logo} alt="" />            
                    </div>
                </div>                
            </div>

            <div className="left-content text-center lg:text-left px-4 lg:order-1">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">KM TEMBUS</p>
                <p className='text-xl md:text-2xl lg:text-3xl mb-3'>Keluarga Mahasiswa Tembalang Kudus</p>
                <p className='text-lg md:text-xl lg:text-3xl italic'>Muda Berbakti Menginsiprasi</p>
            </div>
        </div>
    )
}