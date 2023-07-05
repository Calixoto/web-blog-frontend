import logo from "@/images/logo.svg";
import Image from "next/image";
import { Button } from "../Button";
import { NavCategories } from "./NavCategories";

// const menu = [
//   {
//     label: "Sobre",
//     to: "/",
//   },
//   {
//     label: "Contato",
//     to: "/",
//   },
// ];

const href = "/";

export const Header = () => {
  return (
    <header className="flex items-center py-4 max-w-7xl mx-auto mb-40 xl:px-0 px-4">
      <nav className="flex items-center justify-between w-full space-x-4">
        <ul className="flex items-end space-x-8">
          <li className="hover:text-blue-600 font-medium text-lg">
            <a href={href} className="flex items-end gap-2">
              <Image src={logo} alt="" loading="lazy" width={37} height={48} />
              IA Hub
            </a>
          </li>
          <NavCategories />
          {/* {menu.map(({ label, to }) => (
            <li key={label} className="hover:text-blue-600 font-medium text-lg">
              <Link href={to}>{label}</Link>
            </li>
          ))} */}
        </ul>
        <Button>Registrar</Button>
      </nav>
    </header>
  );
};
