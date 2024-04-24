import {
  ContentType,
  ContentfulCollection,
  EntrySkeletonType,
  createClient,
} from "contentful";
import { cache } from "react";

export type Post = {
  date: string;
  title: string;
  content: ContentType;
  image: string;
  imageAlt: string;
  id: string;
  category: string;
  shortDescription: string;
  tags: string[];
  total?: number;
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process?.env.CONTENTFUL_ACCESS_TOKEN! as string,
});

export function contentfulClient() {
  return client;
}

export async function getConsultationPrices() {
  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "cenyKonsultacji",
  });

  const prices = data.items[0].fields;
  return prices;
}

export async function getPageData() {
  const data = await client.getEntry<EntrySkeletonType>(
    "30Hiyh24JEkI18jon1UXcB"
  );
  return data;
}

export async function getBlogPosts(limit = 20, skip = 0, filter?: string) {
  const skipBlogPosts = skip < 0 ? 0 : skip * limit;

  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "posts",
    "fields.kategoria.fields.kategoriaPosta": filter,
    "fields.kategoria.sys.contentType.sys.id": "kategoriePostow",
    //@ts-ignore
    order: "-sys.createdAt",
    limit: limit,
    skip: skipBlogPosts,
  });

  //@ts-ignore
  return data.items.map((post: ContentfulCollection) => {
    const id = post.sys.id;
    const date = post.sys.createdAt.slice(0, 10);
    const title = post.fields.tytu;
    const content = post.fields?.trePosta;
    const category = post?.fields?.kategoria?.fields?.kategoriaPosta;
    const shortDescription = post.fields?.opisPosta;
    const tags = post.fields.tagi;
    const image = post.fields?.zdjcieWTle?.fields?.file.url!;
    const imageAlt = post.fields?.zdjcieWTle?.fields.title!;
    const total = data.total;

    return {
      date,
      title,
      content,
      image,
      imageAlt,
      id,
      category,
      shortDescription,
      tags,
      total,
    };
  });
}

export const getSinglePost = cache(async (id: string) => {
  const post = await client.getEntry(id);

  const date = post.sys.createdAt.slice(0, 10);
  const title = post.fields.tytu;
  const content = post.fields.trePosta;
  //@ts-ignore
  const category = post?.fields?.kategoria?.fields?.kategoriaPosta;
  const shortDescription = post.fields.opisPosta;
  const tags = post.fields.tagi;

  //@ts-expect-error
  const image = post.fields?.zdjcieWTle?.fields?.file.url!;
  //@ts-expect-error
  const imageAlt = post.fields?.zdjcieWTle?.fields.title!;

  return {
    date,
    title,
    content,
    image,
    imageAlt,
    id,
    category,
    shortDescription,
    tags,
  };
});

export async function getAllCertyficates() {
  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "certyfikaty",
  });

  const certyficates = data.includes?.Asset;

  const urls = certyficates?.map((certyficate) => {
    const url = certyficate.fields.file.url;
    const title = certyficate.fields.title;
    const alt = certyficate.fields.description;
    return { url, title, alt };
  });

  return urls;
}

export async function getAllCertyficatesHorizontal() {
  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "certyfikatyPoziome",
  });

  const certyficates = data.includes?.Asset;

  const urls = certyficates?.map((certyficate) => {
    const url = certyficate.fields.file.url;
    const title = certyficate.fields.title;
    const alt = certyficate.fields.description;
    return { url, title, alt };
  });

  return urls;
}

export async function getStatuate() {
  const statute = await client.getEntries<EntrySkeletonType>({
    content_type: "regulaminStrony",
  });
  const statuteData = statute?.includes?.Asset;
  const statuteDataUrl = statuteData![0]?.fields?.file.url;
  return statuteDataUrl;
}

export async function getSurveyUrl() {
  const survey = await client.getEntries<EntrySkeletonType>({
    content_type: "ankietaYwieniowa",
  });
  const surveyData = survey?.includes?.Asset;
  const surveyUrl = surveyData![0]?.fields?.file.url;
  return surveyUrl;
}

export async function getDownloadableFiles() {
  const statute = await client.getEntries<EntrySkeletonType>({
    content_type: "regulaminStrony",
  });
  const rodo = await client.getEntries<EntrySkeletonType>({
    content_type: "rodo",
  });
  const privacyPolicy = await client.getEntries<EntrySkeletonType>({
    content_type: "politykaPrywatnoci",
  });

  const statuteData = statute?.includes?.Asset;
  const rodoData = rodo?.includes?.Asset;
  const privacyPolicyData = privacyPolicy?.includes?.Asset;

  const statuteDataUrl = statuteData![0]?.fields?.file.url;
  const rodoDataUrl = rodoData![0]?.fields?.file.url;
  const privacyPolicyDataUrl = privacyPolicyData![0]?.fields?.file.url;

  return { statuteDataUrl, rodoDataUrl, privacyPolicyDataUrl };
}

export async function getCategory() {
  const category = await client.getEntries<EntrySkeletonType>({
    content_type: "kategoriePostow",
  });

  const categoryData = category?.items;
  // const categoryDataT = category?.sys

  // console.log(categoryDataT);

  return categoryData;
}

export async function getHomePageData() {
  const data = await client.getEntry<EntrySkeletonType>(
    "1KQjX2P9PpwAkvCxYbLeOm"
  );
  return data;
}
export async function getPsychodieteticImage() {
  const data = await client.getAsset("3rw2W8ywLOBkHaORafwCjz");
  return data;
}
