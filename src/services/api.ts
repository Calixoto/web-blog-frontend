import { stringify } from "qs";

export const fetchData = async (path: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const strapi_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const params = {
    sort: { createdAt: "desc" },
    populate: {
      thumbnail: { fields: ["url"] },
      category: { populate: "*" },
    },
  };
  const options: RequestInit = {
    method: "GET",
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const URL = `${strapi_url}/${path}?${stringify(params)}`;

  try {
    const response = await fetch(URL, options);

    if (!response.ok) {
      throw new Error("Erro ao obter os dados da API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};

export const fetchDataBySlug = async (path: string, slug: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const strapi_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const params = {
    filters: { slug },
    populate: {
      thumbnail: { fields: ["url"] },
      category: { fields: ["name"] },
      blocks: { populate: "*" },
    },
  };
  const options: RequestInit = {
    method: "GET",
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const URL = `${strapi_url}/${path}?${stringify(params)}`;

  try {
    const response = await fetch(URL, options);

    if (!response.ok) {
      throw new Error("Erro ao obter os dados da API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};
