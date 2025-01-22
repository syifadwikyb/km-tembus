import {createRoot} from "react-dom/client";
import './global.css'
import Container from "./../nav_footer/Container";
import Hero from "./../homepage/Hero";
import About from "./../homepage/About";
import Vission_Mission from "./../homepage/Vission_Mission";
import Documentations from "./../homepage/Documentations";


createRoot(document.getElementById('root'))
    .render(
        <div className="bg-secondary font-jakarta">
            <div className="mx-auto">
                <Container>
                    <Hero/>
                    <About/>
                    <Vission_Mission/>
                    <Documentations/>
                </Container>                
            </div>
        </div>
    )