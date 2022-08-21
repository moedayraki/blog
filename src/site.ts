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
    { text: 'Subscribe', link: '/subscribe' },
  ],

  sidebar: [
    {
      text: 'Top Ten Posts',
      link: '/',
      children: [
        { text: 'The Moe Blog', link: '/posts/the-moe-blog' },
      ],
    },    
  ],
}

export default site