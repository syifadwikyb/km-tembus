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
                        proker1="• Pengadaan Lanyard & PDL"
                        proker2="• Open Jastip"
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"
                        programUp1="Pengadaan Lanyard & PDL"
                        timeUp1="Januari 2025"

                        programDown1="Open Jastip"
                        timeDown1="Januari 2025"                   
                    />

                    <Member
                        member1="Nilna Sholeha"
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Taraka Sela Hutama"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Azzarah Aula Ariwani"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Fausta Davin Ekapriya"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Nurul Aulia"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Nurun Nasywa Imtiyaaz"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Reza Pahlevi"
                        imgMember7={Doc}
                        position7="Staff Muda"
                    />        
                </Container>
            </div>
        )