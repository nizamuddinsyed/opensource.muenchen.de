import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote';

const base = '/opensource.muenchen.de/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base,
  srcExclude: [
      'README.md'
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: "München Open Source",
      description: "Der magische Ort unserer Open-Source Bemühungen.",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          {text: 'Start', link: '/de/'},
          {text: 'Nutzen', link: '/de/use'},
          {text: 'Verbessern', link: '/de/contribute'},
          {text: 'Veröffentlichen', link: '/de/publish'},
          {text: 'Grundlagen', link: '/de/grundlagen'},
        ],

        sidebar: [],
        outline: {
          label: "Auf dieser Seite"
        },
        darkModeSwitchLabel: "Darstellung",
        langMenuLabel: "Sprache wechseln",
        returnToTopLabel: "Zurück nach oben",
        notFound: {
          title: "Seite nicht gefunden.",
          code: "404",
          quote: "Mögen hätt' ich schon wollen, aber dürfen hab ich mich nicht getraut!",
          linkText: "Bring mich nach Hause"
        },

        footer: {
          message: `<a href="${base}impress">Impressum und Kontakt</a>`
        },
        editLink: {
          pattern: 'https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path',
          text: 'Diese Seite auf GitHub anzeigen'
        },
      },
    }
  },
  title: "Munich Open Source",
  description: "The magical place of our open source initiative.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use', link: '/use' },
      { text: 'Improve', link: '/contribute' },
      { text: 'Publish', link: '/publish' },
      { text: 'Overview', link: '/overview' },
    ],

    footer: {
      message: `<a href="${base}impress">Impress and Contact</a>`
    },

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/it-at-m/opensource.muenchen.de' }
    ],
    editLink: {
      pattern: 'https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path',
      text: 'View this page on GitHub'
    },

  },

  markdown: {
    config(md) {
      md.use(MarkdownItFootnote);
    }
  }
})
