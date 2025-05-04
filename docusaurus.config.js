// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const blogConfig = {
  path: 'services',
  editLocalizedFiles: false,
  blogTitle: 'Services',
  blogDescription: 'Introducing SaaS and open source software for developers',
  blogSidebarCount: 'ALL',
  blogSidebarTitle: 'List services',
  routeBasePath: 'services',
  include: ['**/*.md', '**/*.mdx'],
  exclude: [
    '**/_*.{js,jsx,ts,tsx,md,mdx}',
    '**/_*/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/__tests__/**'
  ],
  postsPerPage: 18,
  truncateMarker: /<!--\s*(more)\s*-->/,
  showReadingTime: false,
  onUntruncatedBlogPosts: 'ignore',
  // Remove this to remove the "edit this page" links.
  editUrl:
    'http://github.com/MOONGIFT/moongift.dev/tree/main/',
  remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MOONGIFT.dev',
  tagline: 'Introducing cloud services and open source software that are useful for developers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://moongift.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MOONGIFT', // Usually your GitHub org/user name.
  projectName: 'moongift.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
      en: {
        label: 'English',
      },
    },
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/moongift/moongift-dev/tree/main'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MOONGIFT.dev',
        logo: {
          alt: 'MOONGIFT.dev Logo',
          src: 'img/icon.png'
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Documents'
          },
          { to: '/services', label: 'Services', position: 'left' },
          {
            'href': 'https://github.com/moongift/moongift-dev',
            'position': 'right',
            'className': 'header-github-link',
            'aria-label': 'GitHub repository'
          },
          {
            type: 'localeDropdown',
            position: 'right',
            // dropdownActiveClassDisabled: true
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/moongift_dev'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/moongift/moongift-dev'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Tailwind Shadcn. Templates by <a href="https://github.com/namnguyenthanhwork" style="font-weight: bold;" target="_blank">Thành Nam Nguyễn</a>`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en', 'ja'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 20,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin', blogConfig
    ]
  ]
}

export default config
