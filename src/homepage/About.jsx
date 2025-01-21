import logo from './../assets/logo_kmtembus.png';

export default function About() {
    return(
        <div className="container mx-auto mt-16 flex flex-col lg:flex-row items-center bg-white rounded-lg lg:rounded-xl">
            <div className="text-center lg:text-left p-10 flex-1 lg:mr-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">KM TEMBUS</p>
                <p className="text-base md:text-lg lg:text-2xl mb-3 lg:text-justify">
                Keluarga Mahasiswa Tembalang-Kudus merupakan organisasi mahasiswa daerah yang menaungi mahasiswa aktif di daerah Tembalang-Kudus. KM TEMBUS terdiri dari 3 kampus, yakni Politeknik Negeri Semarang, Poltekkes Kemenkes Semarang, dan Universitas Diponegoro. KM TEMBUS dapat menjadi wadah untuk menambah relasi, menemukan keluarga baru, dan meningkatkan kapasitas diri dalam berbagai program kerja.
                </p>
            </div>
            <div className="hidden lg:flex justify-center px-4 flex-1">
                <img className="w-1/2 md:w-2/5 lg:w-3/5 max-w-full h-auto" src={logo} alt="" />                
            </div>
        </div>
    )
}