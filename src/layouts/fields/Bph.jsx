import {createRoot} from "react-dom/client";
import '../global.css'
import Container from "../../nav_footer/Container.jsx";
import Fields from "../../field_program/Fields.jsx";
import Doc from "./../../assets/documentation_2.jpg";
import TimeLine from "../../field_program/TimeLine.jsx";
import Member from "../../field_program/Member.jsx";

createRoot(document.getElementById('root'))
    .render(
            <div className="bg-secondary font-jakarta">
                <Container>
                    <Fields
                        title="Badan Pengurus Harian"
                        desc="KM TEMBUS atau Keluarga Mahasiswa Tembalang Kudus merupakan Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Fusce gravida pharetra tortor, non consequat ex efficitur
                            vel. Curabitur at risus et quam egestas scelerisque. Proin condimentum"
                        field="Program Kerja"
                        field1="Program Kerja 1-5"
                        field2="Program Kerja 1-5"
                        field3="Program Kerja 1-5"
                        field4="Program Kerja 1-5"
                        field5="Program Kerja 1-5"
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"
                        programUp1="Makrab"
                        timeUp1="Januari 2025"

                        programDown1="Makrab"
                        timeDown1="Januari 2025"

                        programUp2="Makrab"
                        timeUp2="Januari 2025"

                        programDown2="Makrab"
                        timeDown2="Januari 2025"

                        programUp3="Makrab"
                        timeUp3="Januari 2025"

                        programDown3="Makrab"
                        timeDown3="Januari 2025"                        
                    />

                    <Member
                        member1="Nama"
                        imgMember1={Doc}
                        position1="Posisi"

                        member2="Nama"
                        imgMember2={Doc}
                        position2="Posisi"

                        member3="Nama"
                        imgMember3={Doc}
                        position3="Posisi"

                        member4="Nama"
                        imgMember4={Doc}
                        position4="Posisi"

                        member5="Nama"
                        imgMember5={Doc}
                        position5="Posisi"

                        member6
                        imgMember6
                        position6
                    />        
                </Container>
            </div>
        )