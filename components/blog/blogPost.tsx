import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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
      <h2 className="pt-4 font-bold">{title}</h2>
      {/* <img src={thumbnail} alt="" /> */}    
      {documentToReactComponents(post as any)}
    </section>
  );
};

export default BlogPost;
