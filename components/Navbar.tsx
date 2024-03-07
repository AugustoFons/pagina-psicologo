'use client'
import { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
    <header>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navSt">
                <a  href="#">                
                    <Image
                        className="imgpsi"
                        src='/logo.png'
                        width={58}
                        height={58}
                        alt="logo"
                        />
                </a>
                <div className="miNombre" style={{ color: '#002855'}}>
                <a className="nav-link active" aria-current="page" href="#">Bernardo Schiavi</a>
                <a className="nav-link" href="#">Psicologo | MP: 53.560</a>
                </div>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div  className="collapse navbar-collapse me-5" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-xl-5 gap-lg-5 navFont">
                    <li className="nav-item">
                        <a className="nav-link btnNav" aria-current="page" href="#ubicacion">Ubicación</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btnNav" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
</header>
  )
}

export default Navbar