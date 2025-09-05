export interface Blog {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  content: string;
  image?: string;
  status?: "draft" | "published";
  category?: string;
  slug?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  featured?: boolean;
  publishDate?: string;
  attachments?: string[];
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
}
