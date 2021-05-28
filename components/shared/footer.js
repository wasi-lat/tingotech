import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Instagram } from 'react-feather'


export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: '#113423'}}>
      <div className="container mx-auto flex flex-col md:flex-row pt-10 pb-10">
        <div className="w-full md:w-4/12 px-5 md:mx-28">
          <img className="pb-4" src="/img/logo.png" alt="Logo TingoTech" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            et tempus vitae, ut diam sapien. Nibh sollicitudin scelerisque cursus
            arcu tempus semper euismod. Tempor, aenean odio pharetra penatibus
            dui, non aenean enim.
          </p>
        </div>
 
        <div className="w-full md:w-3/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Contactos</h3>
          <ul>
            <li className="text-sm py-1 flex items-center">
              <MapPin size={16} className="mr-1"/>
              Av. Dirección #221
            </li>
            <li className="text-sm py-1 flex items-center">
              <Mail size={16} className="mr-1"/>
              info@tingotech.com
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
                >
                <Instagram size={16} className="mr-1"/>
                Instagram
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-2/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Pagos Aceptados</h3>
          <i class="m-0.5 fab fa-cc-visa" title="Visa"></i>
          <i class="m-0.5 fab fa-cc-mastercard" title="Mastercard"></i>
          <i class="m-0.5 fab fa-cc-paypal" title="Paypal"></i>
          <i class="m-0.5 fas fa-money-check-alt" title="Efectivo"></i>
        </div>

      </div>

      <div className="py-1 text-center text-xs bg-black text-white font-light">
        <p>Made with Coffe by <b>Potato</b></p>
      </div>

    </footer>
  );
}
