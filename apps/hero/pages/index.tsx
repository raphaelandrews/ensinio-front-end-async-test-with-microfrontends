import { Inter, Bricolage_Grotesque } from 'next/font/google';
import Head from 'next/head';

import Hero from '@/components/hero/hero';

const primary = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const secondary = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ensinio — Sua plataforma para ensinar e vender online</title>
        <meta name="description" content="Sua plataforma de ensino all-in-one" />
        <link rel="author" href="https://ndrws.dev" />
        <meta name="author" content="Raphael Andrews" />
        <meta name="keywords" content="Ensinio" />
        <meta name="creator" content="Raphael Andrews" />
        <meta property="og:title" content="Ensinio — Sua plataforma para ensinar e vender online" />
        <meta property="og:description" content="Sua plataforma de ensino all-in-one" />
        <meta property="og:url" content="https://ensinio-frontend-challenge-ndrws.vercel.app/" />
        <meta property="og:site_name" content="Ensinio — Sua plataforma para ensinar e vender online" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://ensinio-frontend-challenge-ndrws.vercel.app/og.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="250x250" />
      </Head>
      <main className={`${primary.variable} ${secondary.variable}`}>
        <Hero />
      </main>
    </>
  )
}
