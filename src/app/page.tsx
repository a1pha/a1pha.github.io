import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <Posts posts={posts} />
          <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />
        </div>
        
        <aside className="space-y-8">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a 
                    href={`category/${cat}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
