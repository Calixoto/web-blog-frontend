import { PromptsData } from "./promptTypes";

export type CategoryData = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      prompts: PromptsData;
    };
  };
};
