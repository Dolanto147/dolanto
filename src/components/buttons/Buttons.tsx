import Link from "next/link";
import { DownloadButtonIcon, LinkArrow } from "../icons/Icons";

type Props = {
  label: React.ReactNode;
  link: string;
};

export function LinkButton({ label, link }: Props) {
  return (
    <Link
      className="border border-blueMain text-blueMain rounded-2xl px-2 flex  items-center justify-center text-xs font-light py-1"
      href={link}
    >
      {label}
      <LinkArrow />
    </Link>
  );
}
export function GradientButtonWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-gradient-main rounded-full text-sm py-3 px-4 text-white">
      {children}
    </button>
  );
}

export function DownloadButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-blueMain bg-lightBLue rounded-2xl px-2 flex gap-2 items-center justify-center text-xs font-light py-2">
      {children}
      <DownloadButtonIcon />
    </button>
  );
}
