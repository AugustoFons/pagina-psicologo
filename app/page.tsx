import Image from "next/image";
import ContactForm from '@/components/ContactForm'
import Whatsapp from '@/components/Whatsapp'

export const metadata = {
    title: 'Psicólogo Bernardo Schiavi Psicologo',
    description: 'Licenciado en Psicologia Bernardo Schiavi, Atencion terapia psicologica presencial y online',
    googleAdsScript: '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559809714530247"crossorigin="anonymous"></script>'
}

export default function Home() {

    return (
        <main>
            <section className="main-top">
                <div className="descripcion">
                    <div className="title"><h1>Licenciado en Psicología Bernardo Schiavi</h1></div>
                    <p style={{ hyphens: 'auto', padding: '0px 30px'}}>Con más de catorce años de experiencia ejerciendo como psicólogo en el Centro de atención primaria N°46 de la Municipalidad de La Plata, en la Comunidad Terapéutica Santa Rita especializada en adicciones y en la atención psicológica privada.</p>
                </div>
                <div className="items">
                    <ul className="lista">
                        <li> <p> <Image src='/atencion.png' width={50} height={50} alt="terapia online"/> Atención Online para pacientes en todo el mundo</p> </li>
                        <li> <p> <Image src='/sesion.png' width={50} height={50} alt="atencion Presencial Online La Plata"/> Atención Presencial en la Ciudad de La Plata</p> </li>
                        <li> <p> <Image src='/Psycologist.png' width={50} height={50} alt="Adolescentes jovenes y adultos"/> Atención Clínica de Adolescentes, Jóvenes y Adultos</p> </li>
                        <li><p><Image src='/Book.png' width={50} height={50} alt="universidad de la plata"/>Egresado de la UNLP</p></li>
                    </ul>
                    <hr />
                </div>
            </section>

            {/* SECCION UBICACION */}
            <section className="ubicacion" id="ubicacion">
                <div className="direccion" style={{ padding: '10px 0px'}}>
                    <h2 className="title">Ubicación</h2>
                    <strong><p>Calle 64 e/ 1 y 115 <br /> Ciudad de La Plata, Buenos Aires.</p></strong>
                </div>
                <div className="ifm">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13084.83548654314!2d-57.9321033!3d-34.9262982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd0bec2e3ab6a01e!2sLic.%20Bernardo%20Schiavi%2C%20Psicologo%2C%20La%20Plata.!5e0!3m2!1ses-419!2sar!4v1664239320126!5m2!1ses-419!2sar" width="450" height="480" loading="lazy"></iframe>
                </div>
                <div className="separacion"></div>
            </section>

            {/* SECCION CONTACTO */}
            <section className="contacto" id="contacto">
                <h2 className="title" style={{ color: "#002855"}}>Contacto</h2>
                <p className="txtctc">Ante cualquier consulta no dude en contactarme por los siguientes medios:</p>
                <div className="container mt-2 d-lg-flex responsContact">
                    <div className="row col-lg-6 col-lg-offset-2 me-5" >
                    <ContactForm />
                    </div>
                    <div className="contact">
                        <div className="email-tel">
                            <a className="email-tel" href="https://api.whatsapp.com/send?phone=+5492216261461&text=¡Hola!">
                                <div><Image src='/wsp.png' width={50} height={50} alt="telefono whatsapp"/></div>
                                <div><strong>+549 2216261461</strong></div>
                            </a>
                        </div>
                        <div className="email-tel">
                            <a className="email-tel" href="mailto:berschiavi.psi@outlook.com">
                                <div><Image src='/envelope.png' width={45} height={45} alt="email"/></div>
                                <div><strong>berschiavi.psi@outlook.com</strong></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Whatsapp />

        </main>
    )
}
