import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Goldpay Investment",
  description: "Leading Loan Servicing Company",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51,65,85)",
              color: "#f7f7f7",
            },
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
