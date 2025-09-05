import Link from "next/link";
import Image from "next/image";
import SmoothScrollNavigation from "@/components/smooth-scroll-navigation";
import SoulfulFooter from "@/components/soulful-footer";

export default async function BlogPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Fetch blogs
  const res = await fetch(new URL("/api/admin/blogs?limit=7", baseUrl), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  // ✅ Only parse once
  const { blogs } = await res.json();

  // First one is featured, rest are normal
  const [featured, ...rest] = blogs || [];

  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNavigation />
      <div className="pt-16">
        <div className="min-h-screen bg-white text-gray-900">
          {/* Hero Section */}
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, stories, and updates from our team — designed with
              simplicity and elegance.
            </p>
          </section>

          {/* Featured Post */}
          {featured && (
            <section className="max-w-6xl mx-auto px-6 mb-16">
              <Link
                href={`/blog/${featured.slug}`}
                className="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={featured.image || "/placeholder.jpg"}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl text-center px-4">
                      {featured.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Blog Grid */}
          <section className="max-w-6xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 pb-16">
            {rest.map((post: any) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.publishDate
                      ? new Date(post.publishDate).toLocaleDateString()
                      : ""}
                  </p>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-800 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
      <SoulfulFooter />
    </div>
  );
}
