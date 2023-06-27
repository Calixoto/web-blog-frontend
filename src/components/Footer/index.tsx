import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-12 max-w-7xl mx-auto border-t-[1px] border-t-gray-900 border-solid shadow-sm mt-40">
      <span className="text-gray-300 font-normal text-base">
        2023 | Todos os direitos reservados.
      </span>
      <ul className="flex items-center space-x-10">
        <li>
          <Link href="">
            <FaFacebookF size={32} color="#1357B3" />
          </Link>
        </li>
        <li>
          <Link href="">
            <FaInstagram size={32} color="#1357B3" />
          </Link>
        </li>
        <li>
          <Link href="">
            <FaYoutube size={32} color="#1357B3" />
          </Link>
        </li>
        <li>
          <Link href="">
            <FaTiktok size={32} color="#1357B3" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
