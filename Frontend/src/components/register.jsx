export function Registro(){
    return(
        <div>
            <h1>Registrate</h1>

            <form>
                <label>Nombre y Apellido</label>
                <input type="text"></input>
                <label>Correo Electrónico </label>
                <input type="email"></input>
                <label>Nombre de Usuario</label>
                <input type="text"></input>
                <label>Contraseña</label>
                <input type="password"></input>
                <label>Confirma tu contraseña </label>
                <input type="password"></input>
                <button>Registrarme</button>
            </form>
        </div>
    );
}