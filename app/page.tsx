import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-16'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-medium'>Blogs</h2>
          <Link href='/blog/article-1' className='text-primary hover:underline'>
            My First Blog Article
          </Link>
          <a
            href='https://qimu.medium.com/'
            target='_blank'
            rel='noopener'
            className='text-primary hover:underline'
          >
            Medium
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
