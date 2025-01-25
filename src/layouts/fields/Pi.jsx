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
                        proker1="• First Gathering STO"
                        proker2="• First Gathering Mahasiswa Baru"
                        proker3="• Malam Keakraban (Makrab)"
                        proker4="• HUT Tembus"
                        proker5="• Halal Bihalal"
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"
                        programUp1="First Gathering STO"
                        timeUp1="Januari 2025"

                        programDown1="First Gathering Mahasiswa Baru"
                        timeDown1="Januari 2025"

                        programUp2="Malam Keakraban (Makrab)"
                        timeUp2="Januari 2025"

                        programDown2="HUT Tembus"
                        timeDown2="Januari 2025"

                        programUp3="Halal Bihalal"
                        timeUp3="Januari 2025"                   
                    />

                    <Member
                        member1="Ghani Ardi Kurniawan"
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Dea Salsabila"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Abdiela Oktafina Alea Putri"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Ahmad Badawi"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Hasan Suryadharma"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Muhammad Rizqi Aditya Prastomo"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Neni Qoerunnissa"
                        imgMember7={Doc}
                        position7="Staff Muda"

                        member8="Sherly Aprilia Damayanti"
                        imgMember8={Doc}
                        position8="Staff Muda"
                    />        
                </Container>
            </div>
        )