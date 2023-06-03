import React from "react";
interface Props {
  children: React.ReactNode;
  styles?: string;
}
const Button: React.FC<Props> = ({ children, styles }) => {
  return (
    <button className={`bg-blue rounded-[4px] text-white font-bold ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
