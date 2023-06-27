import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center px-5 py-3 bg-gradient-to-r to-blue-400 from-blue-600 text-white-100 rounded-md hover:opacity-90 transition-all"
      {...props}
    >
      {children}
    </button>
  );
};
