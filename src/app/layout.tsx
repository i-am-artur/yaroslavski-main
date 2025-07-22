import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cx } from '../../styled-system/css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ресторан Ярославський',
  description: 'Розташований в історичній частині міста Харків-доставка по місту.',
};


  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="uk">
        <body className={cx(`${geistSans.variable} ${geistMono.variable}`)}>{children}</body>
      </html>
    );
  }
