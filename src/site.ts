const twitterHandle = 'MohammedDayraki'

const site = {
  title: "The Moe Blog",
  description: "A blog about programming and technology.",
  year: new Date().getFullYear(),

  url: 'https://www.blog.dayrakiarts.com',
  canonical: 'www.dayrakiarts.com',

  tags: ['blog', 'blogging', 'development', 'fullstack', 'php', 'javascript', 'design', 'css','laravel','frameworks','tailwindcss','programming','software','html'],

  author: 'Moe Dayraki',
  authorUrl: 'https://www.moe.dayrakiarts.com',
  github: 'https://github.com/moedayraki',
  twitterHandle,
  authorHandle: 'MoeDayraki',
  twitter: `https://twitter.com/${twitterHandle}`,

  nav: [
    { text: 'Subscribe', link: '/#subscribe' },
  ],

  sidebar: [
    {
      text: 'Related Posts',
      link: '/',
      children: [
        { text: 'The Binary System', link: '/posts/binary-system' },
        { text: 'Languages Scim', link: '/posts/programming-languages-pt1' },
        { text: 'Languages Dive', link: '/posts/programming-languages-pt2' },
        { text: 'Learn HTML', link: '/posts/learning-html-beginner' },
        { text: 'Livewire Ping Component', link: '/posts/livewire-ping' },
        { text: 'Laravel $loop Variable', link: '/posts/laravel-foreach-loop' },        
        { text: 'Install Laravel+VueJs', link: '/posts/install-laravel-vuejs' },
      ],
    },    
  ],
}

export default site
