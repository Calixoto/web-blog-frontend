import { PostRenderer } from "@/components/PostRenderer";
import { fetchDataBySlug } from "@/services/api";
import { DataTypeBySlug } from "@/types/promptTypes";
import Image from "next/image";

export default async function Tool({ params }: { params: { slug: string } }) {
  const response: DataTypeBySlug = await fetchDataBySlug(
    "ai-tools",
    params.slug
  );
  const data = response.data[0].attributes;
  const thumbnailURL = data.thumbnail.data.attributes.url;
  const title = data.title;
  return (
    <main className="max-w-4xl w-full flex flex-col items-start justify-center mx-auto space-y-14 xl:px-0 px-4">
      <h2 className="text-5xl font-medium text-white-100">{title}</h2>
      <Image
        src={thumbnailURL}
        alt=""
        priority
        placeholder="empty"
        quality={100}
        width={800}
        height={420}
        className="rounded-t-md max-h-[26.25rem] w-full"
      />

      {data.blocks.map((section: any, index: number) =>
        PostRenderer(section, index)
      )}
    </main>
  );
}
