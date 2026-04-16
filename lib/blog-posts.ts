// ─────────────────────────────────────────────────────────────────────────────
// Types & helpers - re-exported from blog-helpers so consumers can import
// from a single place. Article files MUST import from @/lib/blog-helpers
// to avoid circular dependencies.
// ─────────────────────────────────────────────────────────────────────────────

export type { BlogPost, BlogSection } from "@/lib/blog-helpers";
export { p, h2, h3, q, list, img, vid, cta, code } from "@/lib/blog-helpers";

// ─────────────────────────────────────────────────────────────────────────────
// Registry - imports all posts (article files must NOT import blog-posts.ts)
// ─────────────────────────────────────────────────────────────────────────────

import { allPosts } from "@/content/blog/index";
import type { BlogPost } from "@/lib/blog-helpers";

export const blogPosts = allPosts;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}
