import logo from "@/../public/logo.jpg";
import { GradientButtonWrapper } from "../buttons/Buttons";
import Image from "next/image";
import HamburgerMenu from "./components/HamburgerMenu";

export function Header() {
  return (
    <div className="w-full bg-white  flex items-center justify-between gap-2 sticky z-50 top-0 py-3">
      <HamburgerMenu />
      <div className="grow bg-lightBLue rounded-full p-3">
        <Image
          src={logo}
          alt="logo_dolanto"
          height={40}
          width={90}
          className="ml-3"
        />
      </div>
      <GradientButtonWrapper>Contact Us</GradientButtonWrapper>
    </div>
  );
}
