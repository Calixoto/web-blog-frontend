import { Card } from "@/components/Card";
import { fetchData } from "@/services/api";
import { DataType } from "@/types/promptTypes";

export default async function Prompts() {
  const promptsData: DataType = await fetchData("prompts", 3);
  return (
    <main className="max-w-7xl w-full mx-auto space-y-28">
      <section className="flex flex-col items-start space-y-12">
        <h2 className="text-5xl font-medium text-white-100">Ferramentas IA</h2>
        <div className="w-full flex flex-wrap items-start gap-y-8 gap-x-12 justify-center mt-16">
          {promptsData.data.map(({ id, attributes }) => (
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
    </main>
  );
}
