import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/Header";
// import localFont from "next/font/local";

// const sfUiDisplay = localFont({
//   src: "/fonts/sf-ui-display-medium.woff2",
//   weight: "500",
//   variable: "--font-sf-ui-display",
// });

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Краснодар компрессор сервис",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
