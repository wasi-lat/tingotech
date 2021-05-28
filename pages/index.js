import Layout from "@components/layout";
import BrandSlide from "@components/homepage/brand-slide";
import TestimonialsSlides from "@components/homepage/testimonials-slides";

export default function Home() {
  return (
    <Layout>
      <main>
        <section
          className="py-28"
          style={{
            background:
              "linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)",
          }}
        >
          <div className="container mx-auto flex items-center w-full md:w-5/6">
            <div className="w-full md:w-1/2 mx-2">
              <h2 className="font-bold text-4xl md:text-6xl text-white leading-tight">
                Generamos más{" "}
                <mark className="bg-second text-white">productividad</mark>
              </h2>
              <p className="my-5 text-sm font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                egestas convallis morbi quis. Amet, mauris, cras nunc vitae ante
                sagittis.
              </p>
              <button
                className="text-white font-bold rounded-md bg-primary"
                style={{ padding: "16px 24px" }}
              >
                Chatea con nosotros
              </button>
            </div>
            <div className="hidden md:block w-1/2" style={{ height: "34rem" }}>
              <svg className="w-full h-full">
                <use xlinkHref="#tech-man" />
              </svg>
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
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <div className="w-full md:w-1/3 mx-5 bg-white my-5 py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop" />
                </svg>
              </div>
              <h3 className="font-bold pb-3">
                Soporte Técnico de Laptops y PCs
              </h3>
              <p className="text-sm">
                Nos encargamos de dar solución a cualquier problema relacionado
                con tu laptop o PC, realizamos mantenimiento físico y lógico,
                ello te ayudará prevenir futuros fallos, también contamos con
                repuestos (HDDs, SSDs, Memorias RAM), reparación de bisagras,
                reparación de placas, importación de placas nuevas.
              </p>
            </div>
            <div className="w-full md:w-1/3 mx-5 bg-white my-5 py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security" />
                </svg>
              </div>
              <h3 className="font-bold pb-3">Repotenciamiento de Equipos</h3>
              <p className="text-sm">
                Realizamos un diagnóstico minucioso de tu computadora y
                brindamos las recomendaciones apropiadas para que tu equipo gane
                rendimiento.
              </p>
            </div>
            <div className="w-full md:w-1/3 mx-5 bg-white my-5 py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning" />
                </svg>
              </div>
              <h3 className="font-bold pb-3">Sofware Antivirus y Windows</h3>
              <p className="text-sm">
                Contamos con licencias genuinas ESET NOD32 y Windows, ofrecemos
                garantía por su compra.
              </p>
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
            <button
              className="text-white font-bold rounded-md bg-primary"
              style={{ padding: "16px 24px" }}
            >
              Chatea con nosotros
            </button>
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop" />
                </svg>
              </div>
              <h3 className="font-bold">Soporte Técnico de Laptops y PCs</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security" />
                </svg>
              </div>
              <h3 className="font-bold">Repotenciamiento de Equipos</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning" />
                </svg>
              </div>
              <h3 className="font-bold">Sofware Antivirus y Windows</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop" />
                </svg>
              </div>
              <h3 className="font-bold">Soporte Técnico de Laptops y PCs</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security" />
                </svg>
              </div>
              <h3 className="font-bold">Repotenciamiento de Equipos</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
            <div className="w-full md:w-1/3 mx-5 py-6 px-2 md:px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning" />
                </svg>
              </div>
              <h3 className="font-bold">Sofware Antivirus y Windows</h3>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non
                tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum
                neque volutpat elit tempor id fusce. Urna sed nibh viverra odio.
                Enim sit velit purus justo, a commodo.{" "}
              </p>
              <button className="text-sm cursor-pointer underline opacity-50 hover:opacity-100">
                Conversa con nosotros
              </button>
            </div>
          </div>
        </section>

        <section
          className="relative bg-no-repeat bg-fixed bg-cover py-20"
          style={{ backgroundImage: "url(/img/bg-testimonials.png)" }}
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
            <p className="text-gray-400 text-sm text-center w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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
                  src="/img/entities/unas.png"
                  alt="UNAS"
                />
              </div>
              <div className="block w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full bg-white">
                <img
                  className="object-contain w-full h-full"
                  src="/img/entities/pwt.png"
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
            <button
              className="text-white font-bold rounded-md bg-primary"
              style={{ padding: "16px 24px" }}
            >
              Conversa con nosotros
            </button>
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
                src="/img/our-jobs/job-1.jpeg"
                alt="Reparación #1"
              />
            </div>
            <div className="w-1/5 p-3 block overflow-hidden h-64">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-2.jpeg"
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
                src="/img/our-jobs/job-1.jpeg"
                alt="Reparación #1"
              />
            </div>
            <div className="w-1/2 p-3 block overflow-hidden h-44">
              <img
                className="object-cover w-full h-full"
                src="/img/our-jobs/job-2.jpeg"
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
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <div className="w-full md:w-1/5 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src="/img/juancho.png"
                  alt="Juanco"
                />
              </div>
              <p className="font-bold text-lg text-center mt-5">
                Kevin Juancho
              </p>
              <p className="font-light text-lg italic text-center">
                CEO Fundador
              </p>
            </div>
            <div className="w-full md:w-1/5 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src="/img/juancho.png"
                  alt="Juanco"
                />
              </div>
              <p className="font-bold text-lg text-center mt-5">
                Kevin Juancho
              </p>
              <p className="font-light text-lg italic text-center">
                CEO Fundador
              </p>
            </div>
            <div className="w-full md:w-1/5 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src="/img/juancho.png"
                  alt="Juanco"
                />
              </div>
              <p className="font-bold text-lg text-center mt-5">
                Kevin Juancho
              </p>
              <p className="font-light text-lg italic text-center">
                CEO Fundador
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-bold text-2xl mb-3">ENCUENTRANOS</h2>
            <p className="text-gray-400 text-sm text-center w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.159890967003!2d-76.00390859470079!3d-9.31003391194305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a64147eb2d60fb%3A0xabef18ecac7d4a4a!2sTingo%20Tech!5e0!3m2!1ses-419!2spe!4v1620782000731!5m2!1ses-419!2spe"
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
        </section>
      </main>
    </Layout>
  );
}
