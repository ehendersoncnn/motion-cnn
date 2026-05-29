import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']],
    rehypePlugins: [
      [
        'rehype-pretty-code',
        {
          theme: {
            dark: 'one-dark-pro',
            light: 'github-light',
          },
          keepBackground: false,
        },
      ],
    ],
  },
})

const config: NextConfig = {
  // Allow .mdx files as pages
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],

  experimental: {
    // Use Rust-based MDX compiler
    mdxRs: true,
  },
}

export default withMDX(config)
