import { Header } from '@/components/header';
import { createMetadata } from '@/lib/metadata';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import type { Metadata } from 'next';
import { baseOptions, linkItems } from './layout.config';

export default function NotFound() {
  return (
    <HomeLayout
      {...baseOptions}
      links={linkItems}
      nav={{
        component: (
          <Header
            finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
            {...baseOptions}
          />
        ),
      }}
      className='pt-0'
    >
      <div className='container-wrapper flex flex-1'>
        <div className='flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row'>
          <h1 className='text-2xl font-extrabold tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl text-foreground border-border'>
            404
          </h1>
          <h2 className='mt-2 text-muted-foreground sm:mt-0'>
            This page could not be found.
          </h2>
        </div>
      </div>
    </HomeLayout>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description = 'The page you are looking for could not be found.';

  return createMetadata({
    title: 'Not Found',
    description,
  });
}
