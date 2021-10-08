import Link from "next/link";
import { Phone, Facebook, Instagram, } from 'react-feather'

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center w-full md:w-5/6">
      <ul className="mr-3 text-2xl md:text-3xl">
        <li className="h-12 md:h-20">
          <Link href="/">
            <a title="Tingo Tech">
              <img
                className="object-contain h-full"
                src="/img/tingotech.png"
                alt="Tingo Tech"
              />
            </a>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-items-end overflow-auto text-sm">
        <li className="hidden md:block text-center w-24 md:m-0">
          <Link scroll={true} href="#about-us">
            <a title="Nosotros" className="text-white font-medium">
              Nosotros
            </a>
          </Link>
        </li>
        <li className="hidden md:block text-center w-24 md:m-0">
          <Link scroll={true} href="#services">
            <a title="Servicios" className="text-white font-medium">
              Servicios
            </a>
          </Link>
        </li>
        <li className="hidden md:block text-center w-24 md:m-0">
          <Link scroll={true} href="#team">
            <a title="Equipo" className="text-white font-medium">
              Equipo
            </a>
          </Link>
        </li>
        <li className="text-center w-60 md:m-0">
          <ul className="flex content-evenly items-center overflow-auto text-sm">
            <li className="text-center w-1/4 md:m-0">
              <Link href="https://www.facebook.com/tingotech">
                <a
                  className="flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <Facebook size={18} className="text-white font-normal stroke-2"/>
                </a>
              </Link>
            </li>
            <li className="text-center w-1/4 md:m-0">
              <Link scroll={true} href="https://www.instagram.com/tingotech">
                <a
                  className="flex content-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <Instagram size={18} className="center text-white font-normal stroke-2"/>
                </a>
              </Link>
            </li>
            <li className="text-center w-1/4 md:m-0">
              <Link scroll={true} href="https://api.whatsapp.com/send?phone=51928408503&text=Hola Tío TingoTech te quería consultar...">
                <a
                  className="flex content-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Whatsapp"
                >
                  <svg className="h-5 w-5">
                    <use xlinkHref="#whatsapp" />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="text-center w-1/4 md:m-0 justify-center">
              <Link href="tel:+51-928-408-503">
                <a
                  className="flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Phone size={18} className="text-white font-normal stroke-2"/>
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
