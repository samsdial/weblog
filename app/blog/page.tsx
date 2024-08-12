import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { QueryPagination } from '@/components/query-pagination';
import { sortPosts } from '@/lib/utils';

const POST_PER_PAGE = 5;

interface BlogPageProps {
    searchParams: {
        page?: string;
    }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = sortPosts(posts.filter(post => post.published));
    const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

    const displayPost = sortedPosts.slice(
        POST_PER_PAGE * (currentPage - 1),
        POST_PER_PAGE * currentPage
    );
    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:justify-between md:gab-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        Blog
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground">
                    My rambling on all things web dev.
                </p>
            </div>
            <hr className="mt-8" />
            
            {displayPost?.length > 0 ? (
                <ul className="flex flex-col">
                    {displayPost.map(post => {
                        const { slug, date, title, description } = post;
                        return <li key={slug}>
                            <PostItem slug={slug} title={title} date={date} description={description} />
                        </li>
                    })}
                </ul>
            ): (
                <p className="s">Nothing to se here yet</p>
            )}
            <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
        </div>
    )
}