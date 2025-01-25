import kabinet from './../../assets/Bahtera_Abhinaya.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Media_Partner() {
    return (
        <div className="container mx-auto mt-16">            
            <div className="flex flex-col lg:flex-row items-center px-10">
                <div className="flex justify-center px-4 flex-1 lg:order-2">
                    <img className="w-80 md:w-96 lg:w-3/4 max-w-full h-auto" src={kabinet} alt="Kabinet" />
                </div>
                <div className="text-center lg:text-left flex-1 lg:order-1 mr-0 lg:mr-8 mb-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        Prosedur Media Partner KM TEMBUS
                    </p>
                    <div className="text-base md:text-lg lg:text-2xl lg:text-justify">
                        <ol className="list-decimal list-inside">
                            <li>Menghubungi narahubung yang tertera</li>
                            <li>Seluruh panitia mem-follow akun Instagram @km_tembus</li>
                            <li>Like postingan @km_tembus minimal 3 feed per panitia</li>
                            <li>Konfirmasi disertai pengiriman bukti persyaratan ke cp (list nama akun ig saja)</li>
                            <li>Mengirim pamflet/poster dan caption yang akan dipublikasikan</li>
                        </ol>
                    </div>

                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold my-3">Benefit</p>
                    <div className="text-base md:text-lg lg:text-2xl lg:text-justify">
                        <ol className="list-decimal list-inside">
                            <li>Postingan di feed 2x</li>
                            <li>Postingan di instastory 3x</li>                            
                        </ol>
                        <p className='italic'>(Untuk tanggal dan jam posting boleh request)</p>
                    </div>

                    <a href="/">
                        <div className="bg-green-600 lg:mx-0 mx-auto text-white flex items-center mt-6 gap-2 lg:gap-4 lg:p-4 p-2 rounded-md max-w-fit">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            <p className='text-sm lg:text-xl'>Narahubung</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
