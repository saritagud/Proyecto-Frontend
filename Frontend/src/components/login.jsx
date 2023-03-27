import { Link } from "react-router-dom";

export function Login(){
    return(
        <div>
            <h1>Inicia Sesión </h1>

            <form>
                <label>Correo Electrónico </label>
                <input type="email"></input>
                <label>Contraseña</label>
                <input type="password"></input>
                <button>Iniciar Sesión</button>
            </form>

            <p>¿No tienes una cuenta? </p>
            <Link to={"./register.jsx"}>
                <p>¡Regístrate!</p>
            </Link>
            
        </div>
    );
}