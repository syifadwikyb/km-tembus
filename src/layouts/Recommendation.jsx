import {createRoot} from "react-dom/client";
import './global.css'
import Container from "./../nav_footer/Container";
import Recommendations from "./../recommendation/Recommendations";

createRoot(document.getElementById('root'))
    .render(
        <div className="bg-secondary font-jakarta">
            <Container>
                <Recommendations/>
            </Container>
        </div>
    )