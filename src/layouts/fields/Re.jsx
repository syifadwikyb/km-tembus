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

                        proker1="• Sosialisasi Perguruan Tinggi"
                        proker2="• Tembus Sowan Orda"
                        proker3="• Re-Share"
                        proker4="• Database & Support"
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"

                        programUp1="Sosialisasi Perguruan Tinggi"
                        timeUp1="Januari 2025"

                        programDown1="Tembus Sowan Orda"
                        timeDown1="Januari 2025"

                        programUp2="Re-Share"
                        timeUp2="Januari 2025"

                        programDown2="Database & Support"
                        timeDown2="Januari 2025"                     
                    />

                    <Member
                        member1="Wifqul Muna Arsyad"
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Suhaila Faiza Rahma"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Atalia Maharani Dewi Arianto"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Damayanti Afni Lathifa"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Devga Ryan Bagaskara"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Miftahul Jannah"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Muchamad Alfian 'Ainnurro'uf"
                        imgMember7={Doc}
                        position7="Staff Muda"

                        member8="Zulfa Millati"
                        imgMember8={Doc}
                        position8="Staff Muda"
                    />        
                </Container>
            </div>
        )