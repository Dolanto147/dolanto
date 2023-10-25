import comingSoonImg from "@/../public/comingSoonLogo.jpg";
import logo from "@/../public/logo.jpg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const monteSerrat = Montserrat({
  weight: ["700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex  min-h-screen w-full p-5 max-lg:p-3">
      <div className="relative bg-gray-100 min-h-full min-w-full flex items-center shadow-insetCustom justify-center flex-col gap-1 rounded-[30px]">
        <div className="absolute shadow-sm top-0 left-1/2 bg-white -translate-x-1/2 rounded-b-xl px-8 py-2 after:content-[''] after:absolute after:top-[0%] after:left-[0%] after:translate-x-[-23%] after:bg-half after:h-[7px] after:w-[30px] after:bg-no-repeat after:bg-gradient-radial-left before:content-[''] before:absolute before:top-[0%] before:right-[0%] before:translate-x-[73%] before:bg-half before:h-[7px] before:w-[30px] before:bg-no-repeat before:bg-gradient-radial-right ">
          <Image
            src={logo}
            alt="dolanto_logo"
            priority={true}
            quality={100}
            width={160}
            height={45}
          />
        </div>
        <Image
          src={comingSoonImg}
          alt="coming_soon"
          priority={true}
          width={340}
          quality={100}
          height={340}
          className="mix-blend-multiply"
        />
        <h1
          style={monteSerrat.style}
          className="text-6xl max-md:text-2xl max-xl:text-4xl text-center leading-normal font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          We’re connecting to the Digital World
        </h1>
        <span className="text-lg text-center">
          Going live very soon, Stay Tuned.
        </span>
      </div>
    </main>
  );
}
