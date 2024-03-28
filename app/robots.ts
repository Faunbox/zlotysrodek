import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/resetowanie-hasla/",
      },
    ],
    sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
  };
}
