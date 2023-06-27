import Link from "next/link";
import Image from "next/image";
import { CustomCard } from "./Card";

export const Hero = () => {
  return (
    <>
      <div id="top" className="pt-10 flex flex-col md:flex-row md:pt-20">
        <div className="md:w-3/5 md:pt-36 text-xl">
          <h1 className="text-5xl mb-2 font-bold">Hi, I'm Farhan</h1>
          <h2 className="text-xl mb-4 font-medium">
            A Full Stack Developer 💻
          </h2>
          <h3 className="text-base mb-1">
            But I am also a Certified Japanese Speaker, {" "}
            <Link
              className="underline underline-offset-2"
              href="https://www.youtube.com/channel/UCoA0Nxbuy3jR7HQBqBGdoTA"
            >
               YouTuber
            </Link>{" "}
            , ex-Mechanical Engineer, a Husband and a Father.
          </h3>

          <h5 className="text-base font-light">
            And also a video editor, guitar player, good cook, tech geek and ...
            you name it!{" "}
          </h5>
          <br />
        </div>
        <CustomCard />
        
      </div>
    </>
  );
};
