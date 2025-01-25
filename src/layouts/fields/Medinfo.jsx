import {createRoot} from "react-dom/client";
import './../global.css'
import Container from "./../../nav_footer/Container";
import Fields from "./../../field_program/Fields.jsx";
import Doc from "./../../assets/documentation_2.jpg";
import TimeLine from "./../../field_program/TimeLine.jsx";
import Member from "./../../field_program/Member.jsx";

createRoot(document.getElementById('root'))
    .render(
            <div className="bg-secondary font-jakarta">
                <Container>
                    <Fields
                        title="Badan Pengurus Harian"
                        desc="KM TEMBUS atau Keluarga Mahasiswa Tembalang Kudus merupakan Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Fusce gravida pharetra tortor, non consequat ex efficitur
                            vel. Curabitur at risus et quam egestas scelerisque. Proin condimentum"
                        proker="Program Kerja"

                        proker1="• Sahur on The Road"
                        proker2="• Launching Kabinet"
                        proker3="• Foto Profil Pengurus"
                        proker4="• Sie Dokumentasi"                        
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"

                        programUp1="Sahur on The Road"
                        timeUp1="Januari 2025"

                        programDown1="Launching Kabinet"
                        timeDown1="Januari 2025"

                        programUp2="Foto Profil Pengurus"
                        timeUp2="Januari 2025"

                        programDown2="Sie Dokumentasi"
                        timeDown2="Januari 2025"                     
                    />

                    <Member
                        member1="Lintang Raya Adinata"
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Krisna Gustian Triswanto"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Florentina Stella Widyastanti"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Marsyanda Fara Islami"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Muhammad Zada Fajri Mushofa"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Berliana Sekar Ramadhani El Akhsan"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Rizki Anindia"
                        imgMember7={Doc}
                        position7="Staff Muda"
                    />        
                </Container>
            </div>
        )