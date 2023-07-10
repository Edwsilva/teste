import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.css';
import { Roboto } from 'next/font/google';
import Sidebar from './components/Sidebar/Sidebar';

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


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
