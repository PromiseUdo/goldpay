import "../globals.css";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./styles/styles.css";
import Footer from "./components/Footer";
// import Navbar from "../components/Navbar/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Blog - Goldpay Investment",
  description: "",
  icons: {
    icon: "/favicon.png",
  },
};

export default function BlogLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
