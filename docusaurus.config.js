// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EIPs Documentation",
  tagline: "Interaction Guide",
  favicon:
    "https://imgs.search.brave.com/8hHUj8csDAu2dUacR--NLK20QKcXkbIgzhAMsd1zpBs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwNTIz/My8xODI3OC9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzE4Mjc4MTAz/NC1zdG9jay1waG90/by12aWV3LWJ1c2lu/ZXNzbWFuLWhvbGRp/bmctZXRoZXJldW0t/Y3J5cHRvLmpwZw",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "0xAdnanH", // Usually your GitHub org/user name.
  projectName: "ERC Documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image:
        "ihttps://imgs.search.brave.com/8hHUj8csDAu2dUacR--NLK20QKcXkbIgzhAMsd1zpBs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwNTIz/My8xODI3OC9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzE4Mjc4MTAz/NC1zdG9jay1waG90/by12aWV3LWJ1c2lu/ZXNzbWFuLWhvbGRp/bmctZXRoZXJldW0t/Y3J5cHRvLmpwZw",
      navbar: {
        title: "Home Page",
        logo: {
          alt: "My Site Logo",
          src: "https://imgs.search.brave.com/8hHUj8csDAu2dUacR--NLK20QKcXkbIgzhAMsd1zpBs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwNTIz/My8xODI3OC9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzE4Mjc4MTAz/NC1zdG9jay1waG90/by12aWV3LWJ1c2lu/ZXNzbWFuLWhvbGRp/bmctZXRoZXJldW0t/Y3J5cHRvLmpwZw",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/0xAdnanH",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/0xadnanhuss/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://twitter.com/0xAdnanH",

            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/0xadnanhuss/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/0xAdnanH",
              },
            ],
          },
          /* {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/0xAdnanH",
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
