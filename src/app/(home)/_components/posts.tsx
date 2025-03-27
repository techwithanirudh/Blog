import { PostCard } from '@/components/post-card';
import { buttonVariants } from '@/components/ui/button';
import type { Page } from '@/lib/source';
import { ArrowLeftIcon, ArrowUpRightIcon, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

export default function Posts({ posts }: { posts: Page[] }) {
  return (
    <section className='border-grid border-b'>
      <div className='container-wrapper'>
        <div className='grid divide-y divide-dashed divide-border/70 text-left dark:divide-border'>
          {posts.map((post) => {
            const date = new Date(post.data.date).toDateString();
            return (
              <PostCard
                title={post.data.title}
                description={post.data.description ?? ''}
                image={post.data.image}
                url={post.url}
                date={date}
                key={post.url}
              />
            );
          })}
          <Link
            href='/posts'
            className={buttonVariants({
              variant: 'default',
              className: 'group rounded-none py-4 sm:py-8',
            })}
          >
            View More
            <ArrowUpRightIcon className='group-hover:-rotate-12 ml-2 size-5 transition-transform' />
          </Link>
        </div>
      </div>
    </section>
  );
}
