import { CategoryData } from "./categoryTypes";

type ThumbnailData = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

type BlocksData = {
  __component: string;
  id: number;
  body: string;
  file: {
    data: {
      attributes: {
        name: string;
        width: number;
        height: number;
        alternativeText: string | null;
        caption: string | null;
      };
      id: number;
    };
  };
};

export interface PromptsData {
  id: number;
  attributes: {
    title: string;
    content: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: ThumbnailData;
    category: CategoryData;
  };
}

export interface PromptsDataBySlug {
  id: number;
  attributes: {
    title: string;
    content: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: ThumbnailData;
    category: CategoryData;
    blocks: BlocksData[];
  };
}

export interface DataType {
  data: PromptsData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface DataTypeBySlug {
  data: PromptsDataBySlug[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
