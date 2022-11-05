import Link from "next/link";

import Layout from "@components/layout";
import BrandSlide from "@components/homepage/brand-slide";
import TestimonialsSlides from "@components/homepage/testimonials-slides";
import ServiceSlideRepowering from "@components/homepage/service-slide-repowering";
import ServiceSlideSupport from "@components/homepage/service-slide-support";
import ServiceSlideVirus from "@components/homepage/service-slide-virus";

export default function Home() {
  return (
    <Layout>
      <main>
        <section
          className="relative bg-no-repeat bg-fixed bg-cover py-24"
          style={{ backgroundImage: "url(/img/principal.jpg)" }}
        >
          <span
            className="block absolute top-0 left-0 h-full w-full opacity-90"
            style={{
              background:
                "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
            }}
          ></span>
          <div className="relative container mx-auto flex items-center w-full md:w-5/6">
            <div className="w-full md:w-1/2 mx-2">
              <h2 className="font-bold text-4xl md:text-6xl text-white leading-tight">
                Servicio Técnico y Reparaciones de Laptops
              </h2>
              <p className="mt-5 mb-8 text-lg font-light text-white">
                Bridamos servicio técnico de Laptops y PCs. Mantenimiento
                preventivo y correctivo. Instalación de programas en general.
                Asesoría técnica personalizada. Transparencia y puntualidad nos
                diferencia.
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech te quería consultar...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chatea con nosotros"
                  className="text-white font-bold rounded-md bg-primary hover:opacity-90"
                  style={{ padding: "16px 24px" }}
                >
                  Chatea con nosotros
                </a>
              </Link>
            </div>
            <div
              className="hidden relative md:block w-1/2"
              style={{ height: "34rem" }}
            >
              <img
                className="object-fill"
                src="/img/servicio_tecnico.png"
                alt="Servicio Técnico"
                title="Servicio Técnico"
              />
            </div>
          </div>
        </section>

        <section id="about-us" className="container mx-auto w-5/6 py-20">
          <div className="flex flex-col items-center mb-7 md:mb-14">
            <h2 className="font-bold text-center text-2xl mb-3">
              NUESTROS SERVICIOS
            </h2>
            {/* <p className="text-gray-400 text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>
          <div className="flex flex-col items-center mx-auto md:w-3/5 lg:w-5/6">
            <div className="flex flex-col md:flex-row w-full mx-5 bg-white my-5 rounded-md shadow-md">
              <div className="md:w-1/2 w-full py-6 pr-2 px-8">
                <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                  <svg className="h-6 w-6">
                    <use xlinkHref="#laptop" />
                  </svg>
                </div>
                <h3 className="font-bold pb-3">
                  Soporte Técnico de Laptops y PCs
                </h3>
                <p className="text-sm">
                  Nos encargamos de dar solución a cualquier problema
                  relacionado con tu laptop o PC, realizamos mantenimiento
                  físico y lógico, ello te ayudará prevenir futuros fallos,
                  también contamos con repuestos (HDDs, SSDs, Memorias RAM),
                  reparación de bisagras, reparación de placas, importación de
                  placas nuevas.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <ServiceSlideSupport />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full mx-5 bg-white my-5 rounded-md shadow-md">
              <div className="md:w-1/2 w-full py-6 pr-2 px-8">
                <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                  <svg className="h-6 w-6">
                    <use xlinkHref="#security" />
                  </svg>
                </div>
                <h3 className="font-bold pb-3">Repotenciamiento de Equipos</h3>
                <p className="text-sm">
                  Realizamos un diagnóstico minucioso de tu computadora y
                  brindamos las recomendaciones apropiadas para que tu equipo
                  gane rendimiento.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <ServiceSlideRepowering />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full mx-5 bg-white my-5 rounded-md shadow-md">
              <div className="md:w-1/2 w-full py-6 pr-2 px-8">
                <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                  <svg className="h-6 w-6">
                    <use xlinkHref="#lightning" />
                  </svg>
                </div>
                <h3 className="font-bold pb-3">Sofware Antivirus y Windows</h3>
                <p className="text-sm">
                  Contamos con licencias genuinas ESET NOD32 y Windows,
                  ofrecemos garantía por su compra.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <ServiceSlideVirus />
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
          }}
        >
          <div className="container mx-auto w-5/6 flex flex-col items-center">
            <h2 className="font-bold text-4xl text-white text-center">
              SERVICIO A DOMICILO
            </h2>
            <p
              className="text-white text-center my-10"
              style={{ fontSize: "24px", lineHeight: "150.5%;" }}
            >
              ¡No Salgas de tu casa u oficina! Evaluamos y realizamos un
              diagnóstico completo de tu computadora a domicilio. Nuestro equipo
              de técnicos están capacitados para resolver cualquier problema de
              hardware o software en tu PC ó Laptop
            </p>
            <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech quisiera pedir un servicio a domicilio para la dirección...">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Chatea con nosotros"
                className="text-white font-bold rounded-md bg-primary hover:opacity-90"
                style={{ padding: "16px 24px" }}
              >
                Chatea con nosotros
              </a>
            </Link>
          </div>
        </section>

        <section id="services" className="container mx-auto py-20 w-5/6">
          <div className="flex flex-col items-center mb-14">
            <h2 className="font-bold text-2xl mb-3">PROBLEMAS COMUNES</h2>
            <p className="text-gray-400 text-sm text-center w-80">
              Te ayudamos a identificar a tiempo los problemas que puedas estar
              teniendo con tu computadora
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning" />
                </svg>
              </div>
              <h3 className="font-bold">Mi computadora no enciende</h3>
              <p className="text-sm py-3">
                Estabas usando tu equipo normal y de pronto al siguiente día
                dejó de encender.
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, mi computadora no enciente 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop" />
                </svg>
              </div>
              <h3 className="font-bold">Pantallazos azules</h3>
              <p className="text-sm py-3">
                Cuando trabajas o cuando juegas, tenemos la solución
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, me salen pantallazos azules 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-5 w-5">
                  <use xlinkHref="#snail" />
                </svg>
              </div>
              <h3 className="font-bold">Windows va muy lento</h3>
              <p className="text-sm py-3">
                Enciende en una eternidad tu equipo o los programas abren muy
                lento
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, mi Windows va muy lento 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lost" />
                </svg>
              </div>
              <h3 className="font-bold">He perdido o eliminado archivos</h3>
              <p className="text-sm py-3">
                No te preocupes, recuperamos tus archivos en tiempo récord.
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, he perdido (elimine!) todos mis archivos 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security" />
                </svg>
              </div>
              <h3 className="font-bold">Tengo muchos virus en la máquina</h3>
              <p className="text-sm py-3">
                Realizamos mantenimiento lógico a tu sistema, eliminación virus
                y prevención a futuras infecciones
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, tengo muchos virus en la máquina 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#tool" />
                </svg>
              </div>
              <h3 className="font-bold">Reparación de placas</h3>
              <p className="text-sm py-3">
                Traemos a la vida tus equipos que no encienden o no dan imagen
              </p>
              <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola Tío TingoTech, necesito urgente una reparación de placa 😢...">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conversa con nosotros"
                  className="text-sm underline opacity-50 hover:opacity-100"
                >
                  Conversa con nosotros
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="relative bg-no-repeat bg-fixed bg-cover py-20"
          style={{ backgroundImage: "url(/img/bg-testimonials.jpg)" }}
        >
          <span
            className="block absolute top-0 left-0 h-full w-full opacity-75"
            style={{
              background:
                "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
            }}
          ></span>
          <TestimonialsSlides />
        </section>

        <section className="container mx-auto py-20 w-5/6">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-bold text-2xl mb-3 text-center">
              ENTIDADES QUE NOS RESPALDAN
            </h2>
            {/* <p className="text-gray-400 text-sm text-center w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-around w-full md:w-4/6">
              <div className="block w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full bg-white">
                <img
                  className="object-contain w-full h-full"
                  src="/img/entities/diconta.jpg"
                  alt="DICONTA"
                />
              </div>
              <div className="flex justify-center items-center w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full bg-white">
                <img
                  className="object-contain w-20 h-20 md:w-36 md:h-36"
                  src="/img/entities/unas.jpg"
                  alt="UNAS"
                />
              </div>
              <div className="block w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full bg-white">
                <img
                  className="object-contain w-full h-full"
                  src="/img/entities/pwt.jpg"
                  alt="PWT"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
          }}
        >
          <div className="container mx-auto w-5/6 flex flex-col items-center">
            <h2 className="font-medium text-center italic text-4xl text-white my-10">
              CONTAMOS CON EL REGISTRO NACIONAL DE PROVEEDORES (RNP) PARA
              TRABAJAR CON EL ESTADO PERUANO.
            </h2>
            <Link href="https://api.whatsapp.com/send?phone=51986077683&text=Hola TingoTech, le escribimos de la institución {Escriba nombre de su institución aquí} para...">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Chatea con nosotros"
                className="text-white font-bold rounded-md bg-primary hover:opacity-90"
                style={{ padding: "16px 24px" }}
              >
                Conversa con nosotros
              </a>
            </Link>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <div className="flex flex-col items-center mb-5">
            <h2 className="font-bold text-2xl text-center">
              NUESTROS TRABAJOS
            </h2>
            <p className="text-gray-400 text-sm text-center w-80">
              Conoce más acerca de nuestro trabajo.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex justify-center">
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-1.jpg"
                alt="Reparación #1"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-2.jpg"
                alt="Reparación #2"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-3.jpeg"
                alt="Reparación #3"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-4.jpeg"
                alt="Reparación #4"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-5.jpeg"
                alt="Reparación #5"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-6.jpeg"
                alt="Reparación #6"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-7.jpeg"
                alt="Reparación #7"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-8.jpeg"
                alt="Reparación #8"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-9.jpeg"
                alt="Reparación #9"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden justify-center">
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-1.jpg"
                alt="Reparación #1"
              />
            </div>
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-2.jpg"
                alt="Reparación #2"
              />
            </div>
          </div>
          <div className="flex md:hidden justify-center">
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-3.jpeg"
                alt="Reparación #3"
              />
            </div>
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-4.jpeg"
                alt="Reparación #4"
              />
            </div>
          </div>
          <div className="flex md:hidden justify-center">
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-5.jpeg"
                alt="Reparación #5"
              />
            </div>
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-6.jpeg"
                alt="Reparación #6"
              />
            </div>
          </div>
          <div className="flex md:hidden justify-center">
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-7.jpeg"
                alt="Reparación #7"
              />
            </div>
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-8.jpeg"
                alt="Reparación #8"
              />
            </div>
          </div>
        </section>

        <section
          className="py-8"
          style={{
            background:
              "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
          }}
        >
          <BrandSlide />
        </section>

        <section id="team" className="container mx-auto py-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-bold text-2xl mb-3 text-center">
              NUESTRO EQUIPO
            </h2>
            <p className="text-gray-400 text-sm text-center w-80">
              Conoce más acerca de nuestro equipo
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
            <Link href="https://pe.linkedin.com/in/kevienfox">
              <a
                title="Kevin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/5 mx-5 py-6 px-8"
              >
                <div className="block overflow-hidden h-48 w-48 mx-auto hover:shadow-xl">
                  <img
                    className="object-contain w-full h-full"
                    src="/img/kevin.jpg"
                    alt="Kevin Espinoza Bravo"
                  />
                </div>
                <p className="font-bold text-lg text-center mt-5">
                  Kevin Espinoza Bravo
                </p>
                <p className="font-light text-lg italic text-center">
                  Co-Founder & General Manager
                </p>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/daison-david-juancho-adriano-441490bb/">
              <a
                title="Juan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/5 mx-5 py-6 px-8"
              >
                <div className="block overflow-hidden h-48 w-48 mx-auto hover:shadow-xl">
                  <img
                    className="object-cover w-full h-full"
                    src="/img/juan.jpg"
                    alt="David Juancho"
                  />
                </div>
                <p className="font-bold text-lg text-center mt-5">
                  David Juancho
                </p>
                <p className="font-light text-lg italic text-center">
                  Co-Founder & Technical Leader
                </p>
              </a>
            </Link>
          </div>
        </section>

        {/* <section className="container mx-auto py-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-bold text-2xl mb-3">ENCUENTRANOS</h2>
            <p className="text-gray-400 text-sm text-center w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3995508316143!2d-76.00153068532049!3d-9.297819599388388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6418f462cf56d%3A0x8622ed977b0cd2e3!2sPucallpa%20432%2C%20Tingo%20Mar%C3%ADa%2010131!5e0!3m2!1ses-419!2spe!4v1661349346706!5m2!1ses-419!2spe"
            frameBorder="0"
            allowFullScreen
            title="AA.HH Brisas del Huallaga, Av. Arenales, comite 2 MZ. G, Tingo María , Perú"
            style={{
              height: "400px",
              width: "100%",
              marginTop: "15px",
              background: "#999",
            }}
          />
        </section> */}
      </main>
    </Layout>
  );
}
