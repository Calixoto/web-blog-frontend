import Link from "next/link";
import { Button } from "../Button";
import { Tiktok } from "../Tiktok";
import { RichText } from "./RichText";

export const PostRenderer = (section: any, index: number) => {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText data={section} key={index} />;
    case "shared.tik-tok":
      return <Tiktok data={section} />;
    case "shared.media":
      return (
        <Link href={section.PromptURL} target="_blank">
          <Button>Acessar IA</Button>
        </Link>
      );
    default:
      return null;
  }
};
