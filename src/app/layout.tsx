import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "IA Hub",
  description:
    "Um site gratuito para você ficar por dentro de todas as inteligencias artificiais do mundo.",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Script async src="https://www.tiktok.com/embed.js"></Script>
      <body className={`${rubik.className} bg-background text-white-300`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
