import Link from 'next/link';

export default function Navigation() {
  return (
    <header className='sticky top-0 z-50 bg-primary text-primary-foreground shadow'>
      <div className='mx-auto max-w-6xl px-4'>
        <nav className='flex h-16 items-center justify-between'>
          <Link href='/' className='text-lg font-semibold'>
            Qi Mu
          </Link>
        </nav>
      </div>
    </header>
  );
}
