import {createRoot} from "react-dom/client";
import Container from "../nav_footer/container";
import './global.css'

createRoot(document.getElementById('root'))
    .render(
        <div>
            <Container>
                <p>Aku sebagai</p>
            </Container>
        </div>
    )