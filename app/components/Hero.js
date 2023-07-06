import Link from "next/link";
import Image from "next/image";
import { CustomCard } from "./Card";

export const Hero = () => {
  return (
    <>
      <div id="top" className="pt-10 flex flex-col md:flex-row md:pt-20">
        <div
          data-aos="fade-right"
          data-aos-offset="25"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="md:w-3/5 md:pt-36 text-xl"
        >
          <h1 className="text-5xl mb-2 font-bold">Hi, I'm Farhan</h1>
          <h2 className="text-3xl mb-4 font-medium">
            A Full Stack Developer 💻
          </h2>
          <h3 className="text-xl mb-1">
            Also a Certified Japanese Speaker,{" "}
            <Link
              className="underline underline-offset-2"
              href="https://www.youtube.com/channel/UCoA0Nxbuy3jR7HQBqBGdoTA"
            >
              YouTuber
            </Link>{" "}
            , ex-Mechanical Engineer, a Husband and a Father.
          </h3>

          <h5 className="text-base font-light">
            A video editor, guitar player, good cook, tech geek and ... you name
            it!{" "}
          </h5>
          <br />
        </div>
        <CustomCard />
      </div>
    </>
  );
};
