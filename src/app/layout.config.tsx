import { UserButton } from '@/components/auth/user-button';
import { Icons } from '@/components/ui/icons';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const title = 'Blog';
export const description =
  'A blog about web development, software engineering, and the latest technologies.';
export const owner = 'Anirudh Sriram';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title,
  },
  githubUrl: 'https://github.com/techwithanirudh/blog',
};

export const linkItems: LinkItemType[] = [
  {
    icon: <Icons.info />,
    text: 'About',
    url: '/about',
    active: 'url',
  },
  {
    icon: <Icons.posts />,
    text: 'Posts',
    url: '/posts',
    active: 'url',
  },
  {
    icon: <Icons.tags />,
    text: 'Tags',
    url: '/tags',
    active: 'url',
  },
  {
    type: 'icon',
    label: 'rss',
    icon: <Icons.rss />,
    text: 'RSS',
    url: '/api/rss.xml',
  },
  {
    type: 'custom',
    children: <UserButton />,
    secondary: true,
  },
];

export const postsPerPage = 5;
