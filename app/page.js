import Image from "next/image";
import { Poppins, Poppins_ExtraBold } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "900"]
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>the best URL shortner in the market</p>
          <p className="text-center px-42">we are the most straightforward url shortner. we make it easy to shorten your links and share them with the world.</p>
          <div className="flex gap-3 text-white">
          <Link href="/shorten">
            <button className="bg-purple-400 p-3 rounded-lg font-bold py-2 cursor-pointer">try now</button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-400 p-3 rounded-lg font-bold py-2 cursor-pointer">GitHub</button>
          </Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image alt="img" src={"/vector.png"} fill={true} className="mix-blend-darken"/>
        </div>
      </section>
    </main>
  );
}
