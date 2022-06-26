import { GetStaticProps } from "next";
import { join, parse } from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import { getAllBlogPosts } from "../../utils/mdx";
import { PostDataType } from "../../types";

interface Props {
  allPosts: PostDataType[];
}

export default function Blog({ allPosts }: Props) {
  return (
    <div className="mt-7">
      <h1 className="text-xl">My Blog 📝</h1>
      <div className="mt-4">
        {allPosts.map((post) => (
          <Link href={`${post.slug}`} key={post.slug}>
            <a>
              <div className="mb-7">
                <p className="font-medium text-lg">{post.title}</p>
                <p className="text-neutral-600 dark:text-neutral-500 py-1 text-sm">
                  {post.description}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

const blogDir = join(process.cwd(), "blog");

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsFiles = getAllBlogPosts();

  return {
    props: {
      allPosts: allPostsFiles.map((file) => {
        const name = parse(file).name;
        const content = fs.readFileSync(`${blogDir}/${name}.mdx`, "utf-8");
        const matterData = matter(content);

        return matterData.data;
      }),
    },
  };
};
