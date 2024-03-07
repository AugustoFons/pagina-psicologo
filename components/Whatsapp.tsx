import Image from "next/image";

const Whatsapp = () => {
    return (
        <div className="appWhatsapp">
            <a href="https://api.whatsapp.com/send?phone=+5492216261461&text=¡Hola!"> 
                <Image src='/whatsapp.png' width={50} height={50} alt='whatsapp' />
            </a>
        </div>
    )
}

export default Whatsapp