import { ReactNode } from "react";
import { Header } from "../header/Header";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className="w-[90%] mx-auto max-w-[1550px]">
      <Header />
      {children}
    </div>
  );
}
