import Head from 'next/head'

import Navbar from '@components/shared/navbar'
import Footer from '@components/shared/footer'
import Symbols from '@components/shared/symbols'

export default function Layout({ children }) {
  return (
    <>
      <Head> {/* <!-- Primary Meta Tags --> */}
        <title>TingoTech - Inicio | Servicio Técnico de Laptops y PC's</title>
        <link rel="icon" href="/assets/img/logo.png" />
        <meta name="description" content="Bridamos servicio técnico de Laptops y PCs. Mantenimiento preventivo y correctivo. Instalación de programas en general. Asesoría técnica personalizada. Transparencia y puntualidad nos diferencia." />
        <meta name="language" content="es" />
        <meta name="author" content="TingoTech" />
        <meta name="subject" content="TingoTech soluciones tecnologicas generando productividad." />
        <meta name="pagename" content="TingoTech" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="black" />
        <meta name="apple-mobile-web-app-title" content="TingoTech" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta href="/atom.xml" type="application/atom+xml" rel="alternate" title="TingoTech" />
      </Head>

      <Head> {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TingoTech" />
        <meta property="og:description" content="TingoTech soluciones tecnologicas generando productividad." />
        <meta property="og:image" content="/public/img/logo_2020.png" />
        <meta property="og:image:alt" content="TingoTech soluciones tecnologicas generando productividad." />
        <meta property="og:url" content="https://www.tingotech.com/" />
        <meta property="og:site_name" content="TingoTech" />
        <meta property="og:locale" content="es" />
      </Head>

      <Head> {/* <!-- Twitter --> */}
        <meta name="twitter:card" value="summary_large_image" content="summary_large_image" />
        <meta name="twitter:site" value="@TingoTech" content="@TingoTech" />
        <meta name="twitter:creator" value="@TingoTech" content="@TingoTech" />
        <meta name="twitter:url" value="https://TingoTech.pe" content="https://TingoTech.pe" />
        <meta name="twitter:title" value="TingoTech" content="TingoTech" />
        <meta name="twitter:description" value="TingoTech soluciones tecnologicas generando productividad." />
        <meta name="twitter:image" value="" content="" />
        <meta name="twitter:summary" content="TingoTech soluciones tecnologicas generando productividad." />
      </Head>

      <Head> {/* <!-- Prefetch --> */}
        <link rel="prefetch" href="/" />
      </Head>

      <Head> {/* <!-- Imports --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <header className="absolute w-full py-3 px-2 z-10">
        <Navbar />
      </header>

      { children }

      <Footer/>

      <Symbols/>
    </>
  )
}