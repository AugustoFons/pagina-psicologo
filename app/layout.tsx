import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleTagManager from '@magicul/next-google-tag-manager';
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'


export const metadata = {
    title: 'Psicólogo Bernardo Schiavi',
    description: 'Licenciado en Psicologia Bernardo Schiavi, Atencion presencial y online',
    alternates: {
        canonical: 'https://psibernardoschiavi.vercel.app/'
    },
    verification: {
        google: "o6rpXZmzbGj4Aex5Jm54PUxApjgxs-h9UhQl6W0_L_A"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <GoogleTagManager id="AW-10907606786" />
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
