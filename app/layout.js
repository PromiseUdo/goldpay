import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Goldpay Investment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}