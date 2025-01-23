import kabinet from './../assets/Bahtera_Abhinaya.png';
import kapal from './../assets/Kapal.png';
import sayap from './../assets/Sayap.png';
import perisai from './../assets/Perisai.png';
import tangan from './../assets/Tangan.png';
import ombak from './../assets/Ombak.png';

export default function Kabinet() {
    return(
        <div className="container mx-auto mt-16 pt-0 p-10 lg:p-20 bg-white rounded-lg lg:rounded-xl">            
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex justify-center px-4 flex-1 lg:order-2">
                    <img className="w-80 md:w-96 lg:w-3/4 max-w-full h-auto" src={kabinet}/>
                </div>
                <div className="text-center lg:text-left flex-1 lg:order-1 mr-0 lg:mr-8 mb-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Bahtera Abhinaya</p>
                    <p className="text-base md:text-lg lg:text-2xl lg:text-justify">
                    Bahtera Abhinaya melambangkan perjalanan bersama yang penuh semangat, keberanian, dan ketangguhan dalam menghadapi rintangan demi meraih tujuan. Simbol ini mencerminkan harapan, perlindungan, dan kerja sama untuk membawa KM TEMBUS terus berkembang dan mencapai level yang lebih baik.
                    </p>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                    <img className="w-48 lg:w-64 h-auto mb-4" src={kapal}/>
                    <p className="font-bold text-lg">Kapal</p>
                    <p className="text-base md:text-lg lg:text-xl">Perjalanan yang dipenuhi semangat untuk mengarungi rintangan demi meraih tujuan bersama.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="w-48 lg:w-64 h-auto mb-4" src={sayap}/>
                    <p className="font-bold text-lg">Sayap</p>
                    <p className="text-base md:text-lg lg:text-xl">Harapan, kemajuan, dan kemampuan untuk terbang lebih tinggi, membawa KM TEMbUS ke level yang lebih baik.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="w-48 lg:w-64 h-auto mb-4" src={perisai}/>
                    <p className="font-bold text-lg">Perisai</p>
                    <p className="text-base md:text-lg lg:text-xl">Perlindungan dan rasa aman, memastikan bahwa seluruh anggota KM TEMBUS merasa terlindungi dalam menghadapi segala risiko.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="w-48 lg:w-64 h-auto mb-4" src={tangan}/>
                    <p className="font-bold text-lg">Tangan</p>
                    <p className="text-base md:text-lg lg:text-xl">Dukungan, kerja sama, dan kebersamaan dalam mewadahi setiap anggota KM TEMBUS untuk saling menguatkan.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="w-48 lg:w-64 h-auto mb-4" src={ombak}/>
                    <p className="font-bold text-lg">Ombak</p>
                    <p className="text-base md:text-lg lg:text-xl">Rintangan yang dihadapi dengan semangat, keberanian, dan ketangguhan.</p>
                </div>                
            </div>
        </div>
    )
}