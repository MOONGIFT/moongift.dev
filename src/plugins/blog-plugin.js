const blogPluginExports = require('@docusaurus/plugin-content-blog')
const defaultBlogPlugin = blogPluginExports.default

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs)
  const pluginOptions = pluginArgs[1]

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (params) {
      const { content, actions } = params;
      const path = content.blogTagsListPath.match(/^.*?\/ja\/(.*)$/) ? '/ja/' : '/';

      const companies = Array.from(new Set(content.blogPosts.filter(post => post.metadata.frontMatter.company !== undefined).map(post => post.metadata.frontMatter.company)));
      const promises = [];
      for (const company of companies) {
        const key = company.toLowerCase().replace(/ /g, '-');
        const posts = content.blogPosts
          .filter(post => post.metadata.frontMatter.company === company)
          .map(post => post.metadata);
        promises.push(actions.addRoute({
          path: `${path}companies/${key}`,
          component: '@site/src/pages/companies/company.js',
          exact: true,
          modules: {
            posts: await actions.createData(`companies/${key}.json`, JSON.stringify(posts)),
          }
        }));
      }
      await Promise.all(promises);
      const recentPostsLimit = 6
      const recentPosts = [...content.blogPosts].splice(0, recentPostsLimit)
      async function createRecentPostModule(blogPost, index) {
        return {
          // Inject the metadata you need for each recent blog post
          blogData: await actions.createData(
            `home-page-recent-post-metadata-${index}.json`,
            JSON.stringify({
              metadata: blogPost.metadata
            })
          ),

          // Inject the MDX excerpt as a JSX component prop
          // (what's above the <!-- truncate --> marker)
          Preview: {
            __import: true,
            // The markdown file for the blog post will be loaded by webpack
            path: blogPost.metadata.source,
            query: {
              truncated: true
            }
          }
        }
      }
      const defaultRoute = {
        // Add route for the home page
        path: '/',
        exact: true,
        // The component to use for the "Home" page route
        component: '@site/src/components/Homepage/index.js',

        // These are the props that will be passed to our "Home" page component
        modules: {
          homePageBlogMetadata: await actions.createData(
            'home-page-blog-metadata.json',
            JSON.stringify({
              blogTitle: pluginOptions.blogTitle,
              blogDescription: pluginOptions.blogDescription,
              path: pluginOptions.path,
              totalPosts: content.blogPosts.length,
              totalRecentPosts: recentPosts.length
            })
          ),
          recentPosts: await Promise.all(recentPosts.map(createRecentPostModule))
        }
      };
      actions.addRoute({ ...defaultRoute, path });
      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded(params)
    }
  }
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended
}
