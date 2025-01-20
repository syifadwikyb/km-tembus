import {createRoot} from "react-dom/client";
import Container from "../nav_footer/container";
import HelloWorld from "./HelloWorld";

createRoot(document.getElementById('root'))
    .render(
        <div>
            <Container>
                <HelloWorld/>
            </Container>
        </div>
    )