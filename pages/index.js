import Layout from '@components/layout'

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="bg-green-400">
          <div className="container mx-auto bg-blue-400">
            <h1>Primera parte de la pagina</h1>
          </div>
        </section>
        <section className="container mx-auto my-10">
          <div className="flex flex-col items-center my-10">
            <h2 className="font-bold text-2xl">NUESTROS SERVICIOS</h2>          
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5 bg-white py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop"/>
                </svg>
              </div>
              <h3 className="font-bold pb-3">Soporte Técnico de Laptops y PCs</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
            </div>
            <div className="w-1/3 mx-5 bg-white py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security"/>
                </svg>
              </div>
              <h3 className="font-bold pb-3">Repotenciamiento de Equipos</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
            </div>
            <div className="w-1/3 mx-5 bg-white py-6 px-8 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning"/>
                </svg>
              </div>
              <h3 className="font-bold pb-3">Sofware Antivirus y Windows</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
            </div>
          </div>
        </section>
        <section className="py-16" style={{background: 'linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)'}}>
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="font-bold text-4xl text-white">SERVICIO A DOMICILO</h2>
            <p className="text-white text-center my-10" style={{fontSize: '24px', lineHeight: '150.5%;'}}>
              ¡No Salgas de tu casa u oficina! Evaluamos y realizamos un diagnóstico 
              completo de tu computadora a domicilio. Nuestro equipo de técnicos están 
              capacitados para resolver cualquier problema de hardware o software en tu 
              PC ó Laptop</p>
            <button className="text-white font-bold rounded-md" style={{background: '#56C35B' , padding: '16px 24px'}} >Chatea con nosotros</button>
          </div>
        </section>
        <section className="container mx-auto my-10">
          <div className="flex flex-col items-center my-10">
            <h2 className="font-bold text-2xl">PROBLEMAS COMUNES</h2>          
            <p className="text-gray-400 text-sm text-center w-80">
              Te ayudamos a identificar a tiempo los problemas 
              que puedas estar teniendo con tu computadora
            </p>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop"/>
                </svg>
              </div>
              <h3 className="font-bold">Soporte Técnico de Laptops y PCs</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security"/>
                </svg>
              </div>
              <h3 className="font-bold">Repotenciamiento de Equipos</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning"/>
                </svg>
              </div>
              <h3 className="font-bold">Sofware Antivirus y Windows</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#laptop"/>
                </svg>
              </div>
              <h3 className="font-bold">Soporte Técnico de Laptops y PCs</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#security"/>
                </svg>
              </div>
              <h3 className="font-bold">Repotenciamiento de Equipos</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="flex items-center justify-center mb-3 h-10 w-10 bg-green-200 rounded-full">
                <svg className="h-6 w-6">
                  <use xlinkHref="#lightning"/>
                </svg>
              </div>
              <h3 className="font-bold">Sofware Antivirus y Windows</h3>
              <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non tellus nullam ut habitasse sit. Vitae, porttitor vel fermentum neque volutpat elit tempor id fusce. Urna sed nibh viverra odio. Enim sit velit purus justo, a commodo. </p>
              <button className="text-sm cursor-pointer hover:underline">Conversa con nosotros</button>
            </div>
          </div>
        </section>
        <section className="py-16" style={{background: 'linear-gradient(257.86deg, #0E5541 0%, #217039 65.94%, #358B30 100%)'}}>
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl text-white my-10">
              CONTAMOS CON EL REGISTRO NACIONAL DE PROVEEDORES (RNP) 
              PARA TRABAJAR CON EL ESTADO PERUANO.
            </h2>
            <button className="mt-16 text-white font-bold rounded-md" style={{background: '#56C35B' , padding: '16px 24px'}} >
              Conversa con nosotros
            </button>
          </div>
        </section>
        <section className="container mx-auto my-10">
          <div className="flex flex-col items-center my-10">
            <h2 className="font-bold text-2xl">NUESTROS TRABAJOS</h2>          
            <p className="text-gray-400 text-sm text-center w-80">
              Conoce más acerca de nuestro trabajo.
            </p>
          </div>
          <div className="flex">
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-1.jpeg" alt="Reparación #1" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-2.jpeg" alt="Reparación #2" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-3.jpeg" alt="Reparación #3" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-4.jpeg" alt="Reparación #4" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-5.jpeg" alt="Reparación #5" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-6.jpeg" alt="Reparación #6" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-7.jpeg" alt="Reparación #7" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-8.jpeg" alt="Reparación #8" />
            </div>
            <div className="w-1/3 p-3 block overflow-hidden h-96">
              <img className="object-cover w-full h-full" src="/img/our-jobs/job-9.jpeg" alt="Reparación #9" />
            </div>
          </div>
        </section>
        <section className="container mx-auto my-10">
          <div className="flex flex-col items-center my-10">
            <h2 className="font-bold text-2xl">NUESTRO EQUIPO</h2>          
            <p className="text-gray-400 text-sm text-center w-80">
              Conoce más acerca de nuestro equipo
            </p>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img className="object-contain w-full h-full" src="/img/juancho.png" alt="Juanco" />
              </div>
              <p className="font-bold text-lg text-center mt-5">Kevin Juancho</p>
              <p className="font-light text-lg italic text-center">CEO Fundador</p>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img className="object-contain w-full h-full" src="/img/juancho.png" alt="Juanco" />
              </div>
              <p className="font-bold text-lg text-center mt-5">Kevin Juancho</p>
              <p className="font-light text-lg italic text-center">CEO Fundador</p>
            </div>
            <div className="w-1/3 mx-5 py-6 px-8">
              <div className="block overflow-hidden">
                <img className="object-contain w-full h-full" src="/img/juancho.png" alt="Juanco" />
              </div>
              <p className="font-bold text-lg text-center mt-5">Kevin Juancho</p>
              <p className="font-light text-lg italic text-center">CEO Fundador</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
