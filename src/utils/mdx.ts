import fs from "fs";
import { join } from "path";

const blogDir = join(process.cwd(), "blog");

export function getAllBlogPosts() {
  return fs.readdirSync(blogDir);
}
