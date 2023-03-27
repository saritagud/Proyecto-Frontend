import {FaTelegramPlane,FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";

function Footer(){
    return(
        <div>
            <footer className="flex bg-verdeOscuro w-full h-14 ">
                <p className="font-Urbanist text-1xl px-2">Copyright © 2023 chatUVM. </p>
                <FaTelegramPlane className="text-3xl text-left px-2"/>
                <FaGithubSquare className="text-3xl text-left px-2"/>
                <FaInstagram className="text-3xl text-left px-2"/>
                <FaFacebook className="text-3xl text-left px-2"/>
                </footer>
        </div>
    );
}

export default Footer;