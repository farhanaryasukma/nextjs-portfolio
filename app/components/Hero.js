import Link from "next/link";
import Image from "next/image";
import { CustomCard } from "./Card";

export const Hero = () => {
  return (
    <>
      <div className="pt-10 px-10 flex flex-col lg:flex-row lg:pt-20">
        <div className="lg:w-3/5 pt-10 lg:pt-36">
          <h1 className="text-2xl mb-2">Hello</h1>
          <h2 className="text-xl mb-2">
            I'm Farhan, a Full Stack Developer 💻
          </h2>
          <h3 className="text-lg mb-2">
            a Certified Japanese Speaker,{" "}
            <Link
              className="underline underline-offset-1"
              href="https://www.youtube.com/channel/UCoA0Nxbuy3jR7HQBqBGdoTA"
            >
              YouTuber
            </Link>{" "}
            , ex-Mechanical Engineer, a Husband and a Father.
          </h3>

          <h5 className="text-xs">
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
