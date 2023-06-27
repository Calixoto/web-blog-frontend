import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  slug: string;
};

export const Card = ({
  title,
  description,
  slug,
  thumbnail,
  category,
}: CardProps) => {
  return (
    <article className="flex flex-col max-w-sm rounded-md hover:scale-[1.005] group hover:ring-blue-600 transition-all ring-1 ring-gray-900">
      <Link
        href={`/prompts/${slug}`}
        className="flex flex-col items-start justify-start"
      >
        <Image
          src={thumbnail}
          alt=""
          priority
          placeholder="empty"
          quality={100}
          width={384}
          height={220}
          className="rounded-t-md max-h-56"
        />
        <div className="w-full flex flex-col items-start justify-start space-y-6 pt-11 pb-16 px-5 rounded-b-2xl">
          <span className="text-lg tracking-wide bg-gradient-to-r from-cyan-100 to-blue-400 bg-clip-text text-transparent">
            {category}
          </span>
          <h3 className="font-medium text-2xl text-white-100 group-hover:text-blue-400">
            {title}
          </h3>
          <p className="font-normal text-base text-gray-400 group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};