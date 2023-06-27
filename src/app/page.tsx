"use client";
import { Card } from "@/components/Card";
import { Newsletter } from "@/components/Newsletter";
import { fetchData } from "@/services/api";
import { DataType } from "@/types/promptTypes";

type Data = {
  id: number;
  attributes: {};
};

export default async function Home() {
  const promptsData: DataType = await fetchData("prompts");
  const aiToolsData: DataType = await fetchData("ai-tools");

  return (
    <main className="max-w-7xl w-full mx-auto space-y-28">
      <Newsletter />
      <section className="flex flex-col items-start space-y-12">
        <h2 className="text-5xl font-medium text-white-100">Ferramentas IA</h2>
        <div className="w-full flex flex-wrap items-center gap-4 justify-between  mt-16">
          {aiToolsData.data.map(({ id, attributes }) => (
            <Card
              key={id}
              title={attributes.title}
              description={attributes.description}
              slug={attributes.slug}
              thumbnail={attributes.thumbnail.data.attributes.url}
              category={attributes.category.data.attributes.name}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-start space-y-12">
        <h2 className="text-5xl font-medium text-white-100">Prompts</h2>
        <div className="w-full flex flex-wrap items-center gap-4 justify-between  mt-16">
          {promptsData.data.map(({ id, attributes }) => (
            <Card
              key={id}
              title={attributes.title}
              description={attributes.description}
              slug={attributes.slug}
              thumbnail={attributes.thumbnail.data.attributes.url}
              category={attributes.category.data.attributes.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
