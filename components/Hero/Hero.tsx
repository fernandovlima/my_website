import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [text] = useTypewriter({
    loop: true,
    typeSpeed: 80,
    delaySpeed: 2000,
    deleteSpeed: 50,
    words: [
      "Hi, My name is Fernando",
      "guy-who-loves-code.tsx",
      "<CoffePowered />",
    ],
  });

  return (
    <div
      className={
        "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      }
    >
      <BackgroundCircles />

      <Image
        src={"/img/fernando.jpeg"}
        layout="intrinsic"
        width={140}
        height={140}
        alt={"Fernando Lima"}
        className={
          "relative rounded-full border-4 border-[#F7AB0A] object-cover h-32 w-32 mx-auto"
        }
      />

      <div className={"z-30"}>
        <h2
          className={
            "text-sm uppercase text-gray-500 pb-4 tracking-[10px] md:tracking-[20px] "
          }
        >
          Software engineer
        </h2>

        <h1
          className={
            "text-[24px] md:text-[32px] lg:text-[40px] font-semibold px-5"
          }
        >
          <span className={"mr-3"}>{text}</span>
          <Cursor cursorColor={"yellow"} cursorStyle={"👾"} />
        </h1>
      </div>

      <div className={"flex flex-row z-30 transition-colors"}>
        <Link href={"#about"}>
          <div className={"hero-button"}>About</div>
        </Link>

        <Link href={"#experience"}>
          <div className={"hero-button transition-colors"}>Experience</div>
        </Link>

        <Link href={"#techs-and-tools"}>
          <div className={"hero-button"}>Techs And Tools</div>
        </Link>
      </div>
    </div>
  );
}
