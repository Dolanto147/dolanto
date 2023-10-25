import React from "react";

type Props = {
  children: React.ReactNode;
  customTailwindStyle?: string;
};

export default function GradientText({ children, customTailwindStyle }: Props) {
  return (
    <span
      className={`bg-gradient-main  bg-clip-text text-transparent ${customTailwindStyle}`}
    >
      {children}
    </span>
  );
}
