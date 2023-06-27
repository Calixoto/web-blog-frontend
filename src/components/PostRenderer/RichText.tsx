import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
    body: string;
  };
}

export const RichText = ({ data }: RichTextProps) => {
  return (
    <section className="flex flex-col w-full items-start space-y-6 rich-text text-lg font-normal text-gray-400">
      <Markdown remarkPlugins={[remarkGfm]}>{data.body}</Markdown>
    </section>
  );
};
