import React from "react";
interface Props {
  children: React.ReactNode;
  styles?: string;
}
const Button: React.FC<Props> = ({ children, styles }) => {
  return (
    <button
      className={` rounded-[4px] hover:bg-hover text-white font-bold ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
