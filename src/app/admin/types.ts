export interface Blog {
  id: string;
  title: string;
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

  // Relations
  authorId?: string;
  author?: {
    id?: string;
    name: string;
    email?: string;
  } | null;
}

export interface BlogsApiResponse {
  blogs: Blog[];
  total: number;
  page: number;
  limit: number;
}