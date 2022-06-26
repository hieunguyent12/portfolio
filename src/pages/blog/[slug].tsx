import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { join, parse } from "path";
import remarkHtml from "remark-html";
import { remark } from "remark";
import matter from "gray-matter";

import { getAllBlogPosts } from "../../utils/mdx";
import Container from "../../components/Container";
import { PostDataType } from "../../types/index";

interface Props {
  content: string;
  metadata: PostDataType;
}

export default function BlogPost({ content, metadata }: Props) {
  return (
    <Container
      title={`${metadata.title} - Hieu Nguyen`}
      description={metadata.description}
      type="article"
    >
      <div className="mt-5">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </Container>
  );
}

BlogPost.isBlogPage = true;

const blogDir = join(process.cwd(), "blog");

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsFiles = getAllBlogPosts();

  return {
    paths: allPostsFiles.map((file) => ({
      params: { slug: parse(file).name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogName = context.params?.slug;

  if (!blogName || Array.isArray(blogName)) {
    return {
      notFound: true,
    };
  }

  // read blog content from /blog directory
  const content = fs.readFileSync(`${blogDir}/${blogName}.mdx`, "utf-8");

  const matterData = matter(content);

  // parse file using remark
  const parsedContent = await remark()
    .use(remarkHtml)
    .process(matterData.content);

  return {
    props: {
      content: parsedContent.toString(),
      metadata: matterData.data,
    },
  };
};
