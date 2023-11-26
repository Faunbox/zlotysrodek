import { EntrySkeletonType, createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export function contentfulClient() {
  return client;
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
