import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/utils/aos";
import ScrollToTop from "@/utils/SctollToTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "فروشگاه اینترنتی قهوه علی",
  description: "قهوه علی | مصلی مشهد",
  // icons: {
  //   icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" >
      <body className={inter.className}>
        <AOSInit/>
        {children}
        <ScrollToTop/>
        </body>
    </html>
  );
}
