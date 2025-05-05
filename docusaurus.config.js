import path from 'node:path'
import fs from 'node:fs'

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

  onBrokenLinks: 'ignore',
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
        },
        gtag: {
          trackingID: 'G-FF22Y9XQH4',
          anonymizeIP: true,
        },
      })
    ],
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
        copyright: `Copyright © ${new Date().getFullYear()} MOONGIFT. Developed by Docusaurus Tailwind Shadcn. Templates by <a href="https://github.com/namnguyenthanhwork" style="font-weight: bold;" target="_blank">Thành Nam Nguyễn</a>`
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
    ],
    async function pluginLlmsTxt(context) {
      return {
        name: "llms-txt-plugin",
        loadContent: async () => {
          const { siteDir } = context;
          const contentDir = path.join(siteDir, "services");
          const allMdx = [];

          // recursive function to get all mdx files
          const getMdxFiles = async (dir) => {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                await getMdxFiles(fullPath);
              } else if (entry.name.endsWith(".md")) {
                const content = await fs.promises.readFile(fullPath, "utf8");
                allMdx.push(content);
              }
            }
          };

          await getMdxFiles(contentDir);
          return { allMdx };
        },
        postBuild: async ({ content, routes, outDir }) => {
          const { allMdx } = content;

          // Write concatenated MDX content
          const concatenatedPath = path.join(outDir, "llms-full.txt");
          await fs.promises.writeFile(concatenatedPath, allMdx.join("\n\n---\n\n"));

          // we need to dig down several layers:
          // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
          const docsPluginRouteConfig = routes.filter(
            (route) => route.plugin.name === "docusaurus-plugin-content-docs"
          )[0];

          // docsPluginRouteConfig has a routes property has a record with the path "/" that contains all docs routes.
          console.log({ routes: docsPluginRouteConfig.routes });
          const allDocsRouteConfig = docsPluginRouteConfig.routes?.filter(
            (route) => route.path === "/"
          )[0];

          // A little type checking first
          if (!allDocsRouteConfig?.props?.version) {
            return;
          }

          // this route config has a `props` property that contains the current documentation.
          const currentVersionDocsRoutes = (
            allDocsRouteConfig.props.version).docs;

          // for every single docs route we now parse a path (which is the key) and a title
          const docsRecords = Object.entries(currentVersionDocsRoutes).map(([path, record]) => {
            return `- [${record.title}](${path}): ${record.description}`;
          });

          // Build up llms.txt file
          const llmsTxt = `# ${context.siteConfig.title}\n\n## Docs\n\n${docsRecords.join("\n")}`;

          // Write llms.txt file
          const llmsTxtPath = path.join(outDir, "llms.txt");
          try {
            fs.writeFileSync(llmsTxtPath, llmsTxt);
          } catch (err) {
            throw err;
          }
        },
      };
    },
  ]
}

export default config
