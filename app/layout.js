import "./globals.css";
import {manrope} from "@/utils/fonts"
import NavBar from "@/components/navBar";
import FooterContact from "@/components/footerContact";


export const metadata = {
  title: "Essential Auction",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope}`}>
        <NavBar/>
        {children}
        <FooterContact/>
      </body>
    </html>
  );
}
