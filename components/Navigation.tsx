import { Github, Linkedin, FileText } from 'lucide-react';

export default function Navigation() {
  return (
    <header className='sticky top-0 z-50 bg-primary text-primary-foreground shadow'>
      <div className='mx-auto max-w-6xl px-4'>
        <nav className='flex h-16 items-center justify-between'>
          <span className='text-lg font-semibold'>Qi Mu - Full Stack Engineer</span>
          <div className='flex gap-1'>
            <a
              href='https://github.com/skycloud112'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='rounded-full p-2 hover:bg-white/10'
            >
              <Github className='h-5 w-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/qimu/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='rounded-full p-2 hover:bg-white/10'
            >
              <Linkedin className='h-5 w-5' />
            </a>
            <a
              href='https://qimu.medium.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Medium'
              className='rounded-full p-2 hover:bg-white/10'
            >
              <FileText className='h-5 w-5' />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
