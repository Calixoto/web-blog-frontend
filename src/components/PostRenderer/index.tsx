import { RichText } from "./RichText";

export const PostRenderer = (section: any, index: number) => {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText data={section} key={index} />;
    default:
      return null;
  }
};
