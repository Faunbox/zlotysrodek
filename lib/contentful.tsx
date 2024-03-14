import { EntrySkeletonType, createClient } from "contentful";

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

export async function getBlogPosts() {
  const data = await client.getEntries<EntrySkeletonType>({
    content_type: "posts",
    //@ts-ignore
    order: "sys.createdAt",
  });
  //@ts-ignore
  // console.log(data.items.map(post => post.fields.trePosta.content));

  //@ts-ignore
  return data.items.map((post) => post.fields);
}

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

   const categoryData = category?.items

    return categoryData
}
