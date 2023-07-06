'use client'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.css';
import { Roboto } from 'next/font/google';
import { useState } from 'react';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Portal do Aluno',
  description: 'Carioca digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={roboto.className} style={{overflow: menuOpen ? 'hidden' : 'auto'}}>
        <Navbar blockScroll={setMenuOpen}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
