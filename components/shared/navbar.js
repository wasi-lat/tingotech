import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center w-full md:w-5/6">
      <ul className="mr-3 text-2xl md:text-3xl">
        <li className="h-12 md:h-20">
          <Link href="/">
            <a title="Tingo Texh">
              <img
                className="object-contain h-full"
                src="/img/tingotech.png"
                alt="TingoTech"
              />
            </a>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center overflow-auto text-sm">
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
        <li className="text-center w-24 bg-primary py-1 rounded md:m-0  hover:opacity-90">
          <Link href="https://api.whatsapp.com/send?phone=51928408503&text=Hola Tío TingoTech te quería consultar...">
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Contáctanos"
              className="text-white font-medium"
            >
              Contáctanos
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
