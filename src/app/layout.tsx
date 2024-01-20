import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "donahue.dev",
  description: "Donahue's webpage",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body  className={`flex min-h-dvh flex-col ${manrope.className}`} >
        <Nav />
        <div className="grow">
        {children}
        </div>
        <Footer />
      </body>

    </html>
  );
}



 
