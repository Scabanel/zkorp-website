// ─────────────────────────────────────────────────────────────────────────────
// Blog types & helpers
// Article files should import from HERE, not from blog-posts.ts
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  excerpt: string;
  accent: string;
  tags: string[];
  readTime: string;
  author: string;
  authorHandle: string;
  coverImage?: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "heading" | "paragraph" | "list" | "quote" | "cta" | "image" | "video";
  level?: 2 | 3;
  text?: string;
  items?: string[];
  label?: string;
  href?: string;
  src?: string;
  alt?: string;
  caption?: string;
  youtubeId?: string;
}

export const p    = (text: string): BlogSection => ({ type: "paragraph", text });
export const h2   = (text: string): BlogSection => ({ type: "heading", level: 2, text });
export const h3   = (text: string): BlogSection => ({ type: "heading", level: 3, text });
export const q    = (text: string): BlogSection => ({ type: "quote", text });
export const list = (items: string[]): BlogSection => ({ type: "list", items });
export const img  = (src: string, alt?: string, caption?: string): BlogSection => ({ type: "image", src, alt, caption });
export const vid  = (youtubeId: string): BlogSection => ({ type: "video", youtubeId });
export const cta  = (label: string, href: string): BlogSection => ({ type: "cta", label, href });
