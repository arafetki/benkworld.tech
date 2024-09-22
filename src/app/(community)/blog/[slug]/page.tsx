import { allPosts } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils";
import { Mdx } from "@/components/mdx/mdx-components";

type PostPageProps = {
  params: {
    slug: string
  }
}

const getPostFromParams = async (params: PostPageProps['params']) => {
    const post = allPosts.find((post)=>post.slug===params.slug)
    if (!post) return null
    return post
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {

    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.summary,
        authors: [{name: post.author}],
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
        }
    }

}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({params}: PostPageProps) {

    const post = await getPostFromParams(params)

    if (!post) notFound();

    return (
        <article className="relative max-w-3xl mx-auto p-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                buttonVariants({ variant: "ghost" }),
                "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                <time 
                    dateTime={post.date.toISOString()} 
                    className="block text-base sm:text-lg text-muted-foreground" 
                >
                    Published on {formatDate(post.date)}
                </time>
                <h2 className="inline-block text-sm mt-1 text-muted-foreground">@author ~ {post.author}</h2>
                <h1 className="mt-4 inline-block font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                    {post.title}
                </h1>
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={768}
                    height={405}
                    className="my-8 rounded-md border bg-muted transition-colors"
                    priority
                />
            </div>
            <Mdx code={post.mdx}/>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
                </Link>
            </div>            
        </article>
    );
}