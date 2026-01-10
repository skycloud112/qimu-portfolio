import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='mb-6 text-3xl font-bold tracking-tight'>{children}</h1>,
    h2: ({ children }) => <h2 className='mb-4 mt-8 text-2xl font-semibold'>{children}</h2>,
    h3: ({ children }) => <h3 className='mb-3 mt-6 text-xl font-semibold'>{children}</h3>,
    p: ({ children }) => <p className='mb-4 leading-7 text-foreground/90'>{children}</p>,
    code: ({ children }) => (
      <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>{children}</code>
    ),
    pre: ({ children }) => (
      <pre className='mb-4 overflow-x-auto rounded-lg bg-card p-4 font-mono text-sm shadow-sm'>
        {children}
      </pre>
    ),
    ul: ({ children }) => <ul className='mb-4 list-disc space-y-2 pl-6'>{children}</ul>,
    ol: ({ children }) => <ol className='mb-4 list-decimal space-y-2 pl-6'>{children}</ol>,
    li: ({ children }) => <li className='leading-7'>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className='mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground'>
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <table className='mb-4 w-full border-collapse text-sm'>{children}</table>
    ),
    thead: ({ children }) => <thead className='border-b'>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr className='border-b'>{children}</tr>,
    th: ({ children }) => <th className='px-4 py-2 text-left font-semibold'>{children}</th>,
    td: ({ children }) => <td className='px-4 py-2'>{children}</td>,
    ...components,
  };
}
