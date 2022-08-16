const twitterHandle = 'MohammedDayraki'

const site = {
  title: "The Moe Blog",
  description: "A blog about programming and technology.",
  year: new Date().getFullYear(),

  url: 'https://www.blog.dayrakiarts.com',
  canonical: 'www.dayrakiarts.com',

  tags: ['blog', 'blogging', 'development', 'fullstack', 'php', 'javascript', 'design', 'css','laravel','frameworks','tailwindcss'],

  author: 'Moe Dayraki',
  authorUrl: 'https://www.moe.dayrakiarts.com',
  github: 'https://github.com/moedayraki',
  twitterHandle,
  authorHandle: 'MoeDayraki',
  twitter: `https://twitter.com/${twitterHandle}`,

  nav: [
    { text: 'Top Ten', link: '/guide' },
    { text: 'Contact', link: '/faqs' },
  ],

  sidebar: [
    {
      text: 'Home',
      link: '/guide',
      children: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Getting Started', link: '/guide' },
        { text: 'Development', link: '/guide/development' },
        { text: 'Documents', link: '/guide/documents' },
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Meta Tags', link: '/guide/meta-tags' },
        { text: 'Hydration', link: '/guide/hydration' },
        { text: 'Frameworks', link: '/guide/frameworks' },
        { text: 'Client Scripts', link: '/guide/client-scripts' },
        { text: 'Routing', link: '/guide/routing' },
        { text: 'Turbo', link: '/guide/turbo' },
        { text: 'RSS Feeds', link: '/guide/rss' },
        { text: 'Plugins', link: '/guide/plugins' },
        { text: 'PWA', link: '/guide/pwa' },
        { text: 'Deployment', link: '/guide/deployment' },
      ],
    },
    { text: 'Config', link: '/config' },
    // {
    //   text: 'FAQs',
    //   link: '/faqs',
    //   children: [
    //     { text: 'FAQs', link: '/faqs' },
    //     { text: 'Troubleshooting', link: '/faqs/troubleshooting' },
    //   ],
    // },
  ],
}

export default site