import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  slug: string;
  href?: string;
};

export const Card = ({
  title,
  description,
  slug,
  thumbnail,
  category,
  href = "",
}: CardProps) => {
  return (
    <article className="flex flex-col max-w-sm h-[33.5rem] rounded-md hover:scale-[1.005] group hover:ring-blue-600 transition-all ring-1 ring-gray-900">
      <Link
        href={`/${href}/${slug}`}
        className="flex flex-col items-start justify-start"
      >
        <div className="rounded-t-md h-56 w-full relative">
          <Image
            src={thumbnail}
            alt=""
            priority
            placeholder="empty"
            quality={100}
            fill
            sizes="(min-width: 384px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
            className="rounded-t-md"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start space-y-6 pt-11 pb-16 px-5 rounded-b-2xl">
          <span className="text-lg tracking-wide bg-gradient-to-r from-cyan-100 to-blue-400 bg-clip-text text-transparent">
            {category}
          </span>
          <h3 className="font-medium text-2xl text-white-100 group-hover:text-blue-400">
            {title}
          </h3>
          <p className="font-normal text-base text-gray-400 group-hover:text-gray-300 line-clamp-4">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};
