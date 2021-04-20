import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-3 px-2 md:py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="mr-3 text-2xl md:text-3xl">
          <li>
            <Link href="/">
              <a title="OpenTech">
                TingoTech
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center overflow-auto text-sm">
          <li className="text-center w-24 mr-6 md:m-0">
            <Link href="#">
              <a title="Nosotros">Nosotros</a>
            </Link>
          </li>
          <li className="text-center w-24 mr-6 md:m-0">
            <Link href="#">
              <a title="Servicios">Servicios</a>
            </Link>
          </li>
          <li className="text-center w-24 mr-6 md:m-0">
            <Link href="#">
              <a title="Equipo">Equipo</a>
            </Link>
          </li>
          <li className="text-center w-24 mr-6 md:m-0">
            <Link href="#">
              <a title="Contáctanos">Contáctanos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
