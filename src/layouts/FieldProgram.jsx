import {createRoot} from "react-dom/client";
import './global.css'
import Container from "../nav_footer/Container";
import FieldProgram from "../field_program/FieldProgram";

createRoot(document.getElementById('root'))
    .render(
            <div className="bg-secondary font-jakarta">
                <Container>
                    <FieldProgram/>
                </Container>
            </div>
        )