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

                        proker1="Kupas Sosling"
                        proker2="Jejak Tembus"
                        proker3="Tembus Mengajar"
                        proker4="Tembus Care"
                        doc={Doc}
                    />      
                    <TimeLine
                        timeline="Time Line Program Kerja"
                        programUp1="Kupas Sosling"
                        timeUp1="Januari 2025"

                        programDown1="Jejak Tembus"
                        timeDown1="Januari 2025"

                        programUp2="Tembus Mengajar"
                        timeUp2="Januari 2025"

                        programDown2="Tembus Care"
                        timeDown2="Januari 2025"                                      
                    />

                    <Member
                        member1="Putri Irvina Cahya M."
                        imgMember1={Doc}
                        position1="Kepala Bidang"

                        member2="Naiela Jannatun Nurya"
                        imgMember2={Doc}
                        position2="Wakil Kepala Bidang"

                        member3="Ardelian Adityas Saputra"
                        imgMember3={Doc}
                        position3="Staff Muda"

                        member4="Desvita Tri Anggraeni"
                        imgMember4={Doc}
                        position4="Staff Muda"

                        member5="Ferdiana Rosyada Selly"
                        imgMember5={Doc}
                        position5="Staff Muda"

                        member6="Kayyis Rakha Pranaya Putra"
                        imgMember6={Doc}
                        position6="Staff Muda"

                        member7="Rizka Rahmadhani"
                        imgMember7={Doc}
                        position7="Staff Muda"

                        member8="Sabrina Putri Ramadhani"
                        imgMember8={Doc}
                        position8="Staff Muda"
                    />        
                </Container>
            </div>
        )