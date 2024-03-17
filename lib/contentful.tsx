import { log } from "console";
import { EntrySkeletonType, createClient } from "contentful";
import { cache } from "react";

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

export async function getBlogPosts(limit = 20, skip=0) {
  
  const skipBlogPosts = skip < 0 ? 0 : skip * limit
  
  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "posts",
    //@ts-ignore
    order: "-sys.createdAt",
    limit: limit,
    skip: skipBlogPosts
  });

  //@ts-ignore
  return data.items.map((post) => {
    const id = post.sys.id;
    const date = post.sys.createdAt.slice(0, 10);
    const title = post.fields.tytu;
    const content = post.fields?.trePosta;
    //@ts-expect-error
    const category = post.fields?.kategoriaPosta![0].fields.kategoriaPosta;
    const shortDescription = post.fields?.opisPosta;
    const tags = post.fields.tagi;

    //@ts-expect-error
    const image = post.fields?.zdjcieWTle?.fields?.file.url!;
    //@ts-expect-error
    const imageAlt = post.fields?.zdjcieWTle?.fields.title!;

    const total = data.total

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
      total
    };
  });
}

export const getSinglePost = cache(async (id: string) => {
  console.log("getSinglePost");

  const post = await client.getEntry(id);

  const date = post.sys.createdAt.slice(0, 10);
  const title = post.fields.tytu;
  const content = post.fields.trePosta;
  const category = post.fields.kategoriaPosta;
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
    //@ts-ignore
    order: "sys.createdAt",
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

  return categoryData;
}
