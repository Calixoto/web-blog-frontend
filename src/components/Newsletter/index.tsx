import highlight from "@/images/highlight.svg";
import Image from "next/image";
import { Subscribe } from "./subscribe";

export const Newsletter = () => {
  return (
    <div className="w-full flex items-start justify-center lg:justify-between ">
      <div className="flex flex-col items-start justify-start space-y-5 max-w-2xl break-words">
        <h1 className="break-words text-8xl font-medium text-white-100">
          Explore as melhores IA{"'s"} do mundo
          <span className="bg-gradient-to-r to-blue-400 from-blue-600 bg-clip-text text-transparent">
            .
          </span>
        </h1>
        <div className="flex flex-col space-y-5 w-3/4">
          <p className="break-words text-2xl tracking-wide text-gray-400 font-normal">
            Descubra as inovações em IA que estão moldando o mundo.
          </p>
          <Subscribe />
        </div>
      </div>
      <Image
        src={highlight}
        alt=""
        placeholder="empty"
        loading="lazy"
        width={268}
        height={324}
        className="hidden lg:block"
      />
    </div>
  );
};
