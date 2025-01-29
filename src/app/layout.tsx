import type { Metadata } from 'next';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';
import { montserrat } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'ГЕОТЭК КОЛЛЕДЖ',
  description:
    'Негосударственное образовательное частное учреждение дополнительного профессионального образования Геотэк-Колледж',
  keywords:
    'геотек, геотэк, геотек-колледж, геотэк-колледж, колледж, дополнительное образование, профессиональное образование, НОЧУ ДПО, обучение за рубежом, курсы, курсы иностранных языков, курсы английского, курсы немецкого, курсы геотехники, курс геологии, геология, геотехника',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <nav>
          <Header />
        </nav>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
