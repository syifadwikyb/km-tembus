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
                        proker1="Turnamen Mobile Legends"
                        proker2="Latihan Rutin"
                        proker3="Tiba-tiba Badminton"
                        proker4="Database Prestasi"                        
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"

                        programUp1="Turnamen Mobile Legends"
                        timeUp1="Januari 2025"

                        programDown1="Latihan Rutin"
                        timeDown1="Januari 2025"

                        programUp2="Tiba-tiba Badminton"
                        timeUp2="Januari 2025"

                        programDown2="Database Prestasi"
                        timeDown2="Januari 2025"                       
                    />

                    <Member
                        member1="Fajar Bagus Satriyo"
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Arsyan Nur Fakhri"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Anggito Priambodo"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Putri Dwi Adelia"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Muhammad Bintang Sabiluna"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Muhammad Farrel Ardhana"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Shokhibul Akmal"
                        imgMember7={Doc}
                        position7="Staff Muda"

                        member8="Szahra Nurul Khalisha"
                        imgMember8={Doc}
                        position8="Staff Muda"
                    />        
                </Container>
            </div>
        )