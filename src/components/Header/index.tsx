import logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const menu = [
  {
    label: "Categorias",
    to: "/",
  },
  {
    label: "Sobre",
    to: "/",
  },
  {
    label: "Contato",
    to: "/",
  },
];

export const Header = () => {
  return (
    <header className="flex items-center py-4 max-w-7xl mx-auto mb-40">
      <nav className="flex items-center justify-between w-full space-x-4">
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/">
              <Image src={logo} alt="" loading="lazy" width={37} height={48} />
            </Link>
          </li>
          {menu.map(({ label, to }) => (
            <li
              key={label}
              className="hover:text-purple-600 font-medium text-lg"
            >
              <Link href={to}>{label}</Link>
            </li>
          ))}
        </ul>
        <Button>Registrar</Button>
      </nav>
    </header>
  );
};
