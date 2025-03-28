import { baseOptions, linkItems, title } from '@/app/layout.config';
import { owner } from '@/app/layout.config';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import Link from 'next/link';
import React from 'react';
import { InlineLink } from './inline-link';

export function Footer() {
  const links = getLinks(linkItems, baseOptions.githubUrl);
  const navItems = links.filter((item) =>
    ['nav', 'all'].includes(item.on ?? 'all'),
  );

  return (
    <footer className='border-grid border-t py-6 md:py-0'>
      <div className='container-wrapper'>
        <div className='container mx-auto py-4'>
          <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-2xl'>{title}</span>
            </div>

            <nav className='flex flex-wrap justify-end gap-4 md:gap-8'>
              {navItems
                .filter(
                  (item) =>
                    item.type !== 'menu' &&
                    item.type !== 'custom' &&
                    item.type !== 'icon',
                )
                .map((item, i) => (
                  <InlineLink
                    key={i.toString()}
                    href={item.url}
                    className='font-medium text-foreground text-sm uppercase no-underline transition-colors hover:text-foreground/80'
                  >
                    {item.text}
                  </InlineLink>
                ))}
              <InlineLink
                href='/rss.xml'
                className='font-medium text-foreground text-sm uppercase no-underline transition-colors hover:text-foreground/80'
              >
                RSS
              </InlineLink>
            </nav>
          </div>

          <div className='mt-8 text-center text-gray-500 text-sm md:text-left'>
            © {new Date().getFullYear()} {owner}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
