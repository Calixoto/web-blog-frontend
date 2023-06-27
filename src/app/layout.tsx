import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tiago Oliversan",
  description: "Tiago Oliversan",
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
