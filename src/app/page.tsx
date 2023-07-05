"use client";
import { Card } from "@/components/Card";
import { Newsletter } from "@/components/Newsletter";
import { fetchData } from "@/services/api";
import { DataType } from "@/types/promptTypes";
import Link from "next/link";

type Data = {
  id: number;
  attributes: {};
};

export default async function Home() {
  const promptsData: DataType = await fetchData("prompts", 3);
  const aiToolsData: DataType = await fetchData("ai-tools", 3);

  return (
    <main className="max-w-7xl w-full mx-auto space-y-28 xl:px-0 px-4">
      <Newsletter />
      <section className="flex flex-col items-start space-y-12">
        <div className="flex items-end justify-between w-full">
          <h2 className="text-5xl font-medium text-white-100">
            Ferramentas IA
          </h2>
          <Link
            href="/tools"
            className="text-blue-600 text-base font-medium hover:text-blue-400 transition-all"
          >
            Ver mais...
          </Link>
        </div>
        <div className="w-full flex flex-wrap items-center gap-4 lg:justify-between justify-center mt-16">
          {aiToolsData.data.map(({ id, attributes }) => (
            <Card
              key={id}
              title={attributes.title}
              description={attributes.description}
              slug={attributes.slug}
              thumbnail={attributes.thumbnail.data.attributes.url}
              category={attributes.category.data.attributes.name}
              href="tools"
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-start space-y-12">
        <div className="flex items-end justify-between w-full">
          <h2 className="text-5xl font-medium text-white-100">Prompts</h2>
          <Link
            href="/prompts"
            className="text-blue-600 text-base font-medium hover:text-blue-400 transition-all"
          >
            Ver mais...
          </Link>
        </div>

        <div className="w-full flex flex-wrap items-center gap-4 lg:justify-between justify-center mt-16">
          {promptsData.data.map(({ id, attributes }) => (
            <Card
              key={id}
              title={attributes.title}
              description={attributes.description}
              slug={attributes.slug}
              thumbnail={attributes.thumbnail.data.attributes.url}
              category={attributes.category.data.attributes.name}
              href="prompts"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
