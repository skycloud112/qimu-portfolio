import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-16'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-medium'>Blogs</h2>
          <Link
            href='/blog/2026-01-06-1-multi-tenant-theming'
            className='text-primary hover:underline'
          >
            2026-01-06 - Multi-Tenant Theming: One Codebase, Multiple Brand Identities
          </Link>
          <Link
            href='/blog/2026-01-05-react-component-folder-structure'
            className='text-primary hover:underline'
          >
            2026-01-05 - React Component Folder Structure
          </Link>
          <Link
            href='/blog/2026-01-04-2-single-loading-guard-for-many-providers-pattern'
            className='text-primary hover:underline'
          >
            2026-01-04 - Using a Single LoadingGuard for Multiple Providers in Next.js
          </Link>
          <Link
            href='/blog/2026-01-04-1-sharing-claude-md'
            className='text-primary hover:underline'
          >
            2026-01-04 - How to share claude.md with another person
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-medium'>Old Articles</h2>
          <a
            href='https://qimu.medium.com/'
            target='_blank'
            rel='noopener'
            className='text-primary hover:underline'
          >
            Medium articles
          </a>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-medium'>Projects</h2>
          <Link href='/project/roger' className='text-primary hover:underline'>
            Roger Snow Removal
          </Link>
        </div>
      </div>
    </div>
  );
}
