import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white ">
      <header className="flex items-center justify-between px-5 w-full ">
          <img className="w-30 h-24" src="/src/assets/logo_transparent.png" />
        <nav>
          <FaBars className="text-3xl cursor-pointer text-verdeManzana" onClick={() => setIsOpen(!isOpen)}/>

          {isOpen && (
          <ul className={"origin-top-right absolute right-0 mt-2 w-full h-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-right "}>
            <a className="block px-4 py-3 text-black hover:bg-verdeClaro text-2xl font-Urbanist" href="./inicio.jsx"><li>Inicio</li></a>
            <a className="block px-4 py-3 text-black hover:bg-verdeClaro text-2xl font-Urbanist" href="./chat.jsx"><li>ChatUVM</li></a>
            <a className="block px-4 py-3 text-verbg-verdeClaro hover:bg-verdeClaro text-2xl font-Urbanist" href="./personalizacion.jsx"><li>Personalizacion</li></a>
          </ul>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Nav;
