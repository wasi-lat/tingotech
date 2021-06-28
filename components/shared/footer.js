import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Instagram } from 'react-feather'


export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: '#113423'}}>
      <div className="container mx-auto flex flex-col md:flex-row pt-10 pb-10">
        <div className="flex flex-col items-center w-full md:w-3/12 px-5 md:mx-28">
          <Image 
            src="/img/tingotech.png" 
            alt="Logo TingoTech" 
            width={280}
            height={80}
          />
          <p className="pt-5 text-xs text-justify">
            Tingo Tech es una empresa joven emprendedora que brinda 
            soluciones innovadoras en el sector informático, 
            contribuyendo al desarrollo de la comunidad tingaleza 
            con responsabilidad social.
          </p>
        </div>
 
        <div className="w-full md:w-3/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Contactos</h3>
          <ul>
            <li className="text-sm py-1 flex items-center">
              <MapPin size={16} className="mr-1"/>
              Comite 2 de Brisas
            </li>
            <li className="text-sm py-1 flex items-center">
              <Mail size={16} className="mr-1"/>
              hola@tingotech.com
            </li>
            <li className="text-sm py-1">
              <Link href="tel:+51-986-077-683">
                <a
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Phone size={16} className="mr-1"/>
                  986 077 683
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Redes Sociales</h3>
          <ul>
            <li className="text-sm py-1">
              <Link href="https://www.facebook.com/tingotech">
                <a
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <Facebook size={16} className="mr-1"/>
                  Facebook
                </a>
              </Link>
            </li>
            <li className="text-sm py-1 flex items-center">
              <Link href="https://www.instagram.com/tingotech/">
                <a
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <Instagram size={16} className="mr-1"/>
                  Instagram
                </a>
              </Link>
            </li>
            <li className="text-sm py-1 flex items-center">
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech te quería consultar...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Whatsapp"
                >
                  <i className="mr-2 fab fa-whatsapp"></i>
                  Whatsapp
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-2/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Pagos Aceptados</h3>
          <i className="m-0.5 fab fa-cc-visa" title="Visa"></i>
          <i className="m-0.5 fab fa-cc-mastercard" title="Mastercard"></i>
          <i className="m-0.5 fab fa-cc-paypal" title="Paypal"></i>
          <i className="m-0.5 fas fa-money-check-alt" title="Efectivo"></i>
        </div>

      </div>

      <div className="py-1 text-center text-xs bg-black text-white font-light">
        <p>Made with Coffe by <b>Goplatin</b></p>
      </div>

    </footer>
  );
}
