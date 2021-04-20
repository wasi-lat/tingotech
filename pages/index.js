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
      </main>
    </Layout>
  )
}
