import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import 'reset-css';

import './globals.scss';

import Providers from '@/components/Providers';

const inter = Raleway({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Y_LAB | Форма аутентификации',
  description: 'Сделал Lokusok',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
