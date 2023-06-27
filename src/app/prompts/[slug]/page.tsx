import { Button } from "@/components/Button";
import { PostRenderer } from "@/components/PostRenderer";
import { fetchDataBySlug } from "@/services/api";
import { DataTypeBySlug } from "@/types/promptTypes";
import Image from "next/image";

export default async function Prompt({ params }: { params: { slug: string } }) {
  const response: DataTypeBySlug = await fetchDataBySlug(
    "prompts",
    params.slug
  );
  const data = response.data[0].attributes;
  const thumbnailURL = data.thumbnail.data.attributes.url;
  const title = data.title;
  return (
    <main className="max-w-4xl w-full flex flex-col items-start justify-center mx-auto space-y-14">
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
      {/* <h1 className="text-4xl font-medium text-white-100">
          Get deep actionable insights on customer feedback with AI Copilot for
          Product Managers.
        </h1>
        <p className="text-lg font-normal text-gray-400">
          Features: Provides deep, actionable insights on customer feedback.
          Uses an AI Copilot for Product Managers, powered by OpenAI and GPT-4.
          Can significantly reduce the time required to process and analyze
          feedback. Utilizes AI-generated summaries to assist in feedback
          management. Has the ability to integrate with multiple sources of
          data. Helps teams to prioritize their focus areas. Aims to increase
          productivity and efficiency in teams.
        </p> */}

      <Button>Acessar IA</Button>
    </main>
  );
}
