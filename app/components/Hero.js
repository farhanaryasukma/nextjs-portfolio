import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="pt-20 px-10 flex flex-col-reverse lg:flex-row">
        <div className="lg:w-3/5 pt-10">
          <h1 className="text-2xl mb-1">Hello</h1>
          <h2 className="text-xl mb-2">
            I'm Farhan. I'm a Full Stack Developer,
          </h2>
          <h3 className="text-lg mb-2">
            Also a Certified Japanese Speaker,{" "}
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
        <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg backdrop-blur-sm w-72 h-96 flex-row-reverse">
          <Image className="mx-auto mt-10 rounded-full" src="/download.png" width={200} height={100} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Me</div>
            <p class="text-gray-700 text-base text-center">Nice to meet you!</p>
          </div>
        </div>
      </div>
    </>
  );
};
