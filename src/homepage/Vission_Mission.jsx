export default function Vission_Mission(){
    return(
        <div className="container mx-auto mt-16 px-4 lg:px-0">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-3">Visi dan Misi</p>
            <p className="text-base md:text-lg lg:text-2xl text-center mb-6">
                KM TEMBUS atau Keluarga Mahasiswa Tembalang Kudus merupakan Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2">
                <div className="p-4 lg:p-6 bg-primary rounded-md text-white">
                    <p className="text-lg md:text-xl lg:text-2xl text-center font-bold mb-3">Visi</p>
                    <p className="text-sm md:text-base lg:text-lg">
                        Menjadikan KM Tembus sebagai organisasi yang kokoh dan terjalin erat, sehingga setiap anggota merasa sebagai bagian dari sebuah keluarga yang saling mendukung, menginspirasi, dan tumbuh bersama.
                    </p>
                </div>
                <div className="p-4 lg:p-6 bg-primary rounded-md text-white">
                    <p className="text-lg md:text-xl lg:text-2xl text-center font-bold mb-3">Misi</p>                    
                    <ul className="text-sm md:text-base lg:text-lg text-justify">
                        <li>1. Membangun ikatan kekeluargaan yang kuat antar anggota KM Tembus.</li>
                        <li>2. Menjadikan KM Tembus sebagai organisasi yang lebih dihargai dan diakui, serta memiliki kontribusi yang berarti bagi anggota KM Tembus dan masyarakat.</li>
                        <li>3. Mendorong kolaborasi dan inovasi antar anggota KM Tembus untuk berbagai ide, pengalaman, dan pengetahuan.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}