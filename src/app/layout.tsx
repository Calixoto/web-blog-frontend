import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const rubik = Inter({
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
      <body className={`${rubik.className} bg-background text-white-300`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
