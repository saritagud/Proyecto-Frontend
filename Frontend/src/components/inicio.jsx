import {FaCheckCircle, FaChalkboardTeacher, FaAngleRight, FaBook} from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./footer";

function LandingPage () {
    return(
        <div>
        <Nav/>
            <section className="bg-principal">
            <h1 className="text-white font-signikaNegative text-5xl flex px">ChatUVM</h1>
            <p>El chatUVM es una herramienta diseñada pensando en los estudiantes. Resuelve cualquier dudas en solo minutos! 
            Creado por los mejores estudiantes de nuestra universidad.</p>
        <button>
            Continuar a ChatUVM
        <FaAngleRight/>
        </button>
        </section>

        <section>
            <h1>¿Cómo usarlo?</h1>

            <p>Haz clic en el botón principal de la web</p>
            <p>Inicia sesión con tu correo y contraseña de chatUVM</p>
            <p>¡Escribe cualquier pregunta al chat y listo! Estarías utilizando de forma correcta nuestro chatUVM. </p>
        </section>

        <section>
            <h1>¿Por qué usarlo?</h1>

            <div>
                <div>
                    <FaCheckCircle/>
                    <p>¡Rapidez a la hora de obtener respuestas! Con nuestro chatUVM solo estás a un clic de distancia para resolver tus dudas.</p>
                </div>
                <div>
                    <FaChalkboardTeacher/>
                    <p>¿Tienes dudas con respecto a tu carrera? ¿Deseas conocer algo sobre la universidad? Entonces, ¿qué estás esperando para hacer tu pregunta a chatUVM?</p>
                </div>
                <div>
                    <FaBook/>
                    <p>¡Comodidad y eficiencia! ChatUVM te permite obtener respuestas en cualquier momento y desde cualquier lugar</p>
                </div>
            </div>
        </section>

        <Footer/>
        </div>
        
    );
}

export default LandingPage;