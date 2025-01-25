import {createRoot} from "react-dom/client";
import './global.css'
import Container from "../nav_footer/Container";
import Media_Partner from "./activity/Media_Partner";


createRoot(document.getElementById('root'))
    .render(
        <div className="bg-secondary font-jakarta">
            <div className="mx-auto">
                <Container>
                    <Media_Partner/>
                </Container>                
            </div>
        </div>
    )