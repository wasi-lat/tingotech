import Head from 'next/head'

import Navbaar from '@components/shared/navbar'
import Symbols from '@components/shared/symbols'

export default function Layout({ children }) {
  return (
    <>
      <Head> {/* <!-- Primary Meta Tags --> */}
        <title>TingoTech</title>
        <link rel="icon" href="/assets/img/logo.png" />
        <meta name="description" content="TingoTech soluciones tecnologicas generando productividad." />
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
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="TingoTech soluciones tecnologicas generando productividad." />
        <meta property="og:url" content="" />
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
      </Head>

      <header>
        <Navbaar />
      </header>

      { children }

      <Symbols/>
    </>
  )
}