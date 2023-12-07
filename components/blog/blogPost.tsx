import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Link from "next/link";

const BlogPost = ({
  title,
  thumbnail,
  post,
}: {
  title?: string;
  thumbnail?: string;
  post?: Document;
}) => {
  // console.log(title);

  return (
    <section>
      <Link href={`/blog/${title}`}>
        <h2 className="pt-4 font-bold">{title}</h2>
      </Link>
      {/* <img src={thumbnail} alt="" /> */}
      {documentToReactComponents(post as any)}
    </section>
  );
};

export default BlogPost;
