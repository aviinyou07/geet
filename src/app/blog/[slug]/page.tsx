import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SmoothScrollNavigation from "@/components/smooth-scroll-navigation";
import SoulfulFooter from "@/components/soulful-footer";
import { prisma } from "@/lib/server/prisma";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch single blog by slug
  const post = await prisma.blog.findUnique({
    where: { slug: params.slug },
    include: {
      author: { select: { id: true, name: true, email: true } },
    },
  });

  if (!post) return notFound();

  // Fetch related posts (exclude current one)
  const relatedPosts = await prisma.blog.findMany({
    where: {
      slug: { not: post.slug },
      status: "published",
      category: post.category ?? undefined,
    },
    orderBy: { publishDate: "desc" },
    take: 3,
  });

  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNavigation />
      <div className="pt-16">
        <article className="min-h-screen bg-white text-gray-900">
          {/* Hero Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={post.image || "/placeholder.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Metadata */}
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-wrap gap-4">
            <span>
              {post.publishDate
                ? new Date(post.publishDate).toLocaleDateString()
                : new Date(post.createdAt).toLocaleDateString()}
            </span>
            {post.category && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            )}
            {post.status && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                {post.status}
              </span>
            )}
            {post.featured && (
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                Featured
              </span>
            )}
            {post.author && (
              <span>
                By {post.author.name} ({post.author.email})
              </span>
            )}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="max-w-3xl mx-auto px-6 text-lg text-gray-600 italic mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto px-6 py-6">
            <div
              className="prose prose-lg prose-gray max-w-none prose-img:rounded-xl prose-img:shadow-md prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:italic prose-blockquote:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags & Keywords */}
          <div className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Attachments */}
          {post.attachments.length > 0 && (
            <div className="max-w-3xl mx-auto px-6 py-6">
              <h3 className="text-lg font-semibold mb-3">Attachments</h3>
              <ul className="list-disc list-inside space-y-2">
                {post.attachments.map((file, i) => (
                  <li key={i}>
                    <a
                      href={file}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-6xl mx-auto px-6 pb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">
                Related Posts
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    href={`/blog/${related.slug}`}
                    key={related.id}
                    className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-100"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.jpg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-500 mb-2">
                        {related.publishDate
                          ? new Date(related.publishDate).toLocaleDateString()
                          : ""}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Last updated */}
          <div className="max-w-3xl mx-auto px-6 py-6 text-xs text-gray-500">
            Last updated: {new Date(post.updatedAt).toLocaleDateString()}
          </div>
        </article>
      </div>
      <SoulfulFooter />
    </div>
  );
}
