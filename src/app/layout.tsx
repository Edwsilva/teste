import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.css';
import { Roboto } from 'next/font/google';
import { ReduxProvider } from '@/redux/provider';
import Preloader from './components/Preloader/Preloader';
import { store } from "../redux/store";
import { setMinhasMatriculas } from "../redux/features/matriculas-slice";
import { getMinhasMatriculas } from './api/services';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Portal do Aluno',
  description: 'Carioca digital',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getMinhasMatriculas();
  store.dispatch(setMinhasMatriculas(data));

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <Preloader minhasMatriculas={data} />
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Footer />
      </body>
    </html >
  )
}
