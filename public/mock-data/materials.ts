export const materials = [
  {
    id: 1,
    title: "Typescript",
    description:
      "A superset of JavaScript that compiles to clean JavaScript output. Same language, same semantics, same syntax. But type-safe!",
    string_and_links: [
      {
        string: "Typescript in 100 seconds",
        link: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship",
        eta: 2, // in minutes
      },
      {
        string: "Learn the basics",
        link: "https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship",
        eta: 10, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/t/96/typescript.svg",
  },
  {
    id: 5,
    title: "VS Code",
    description: "Lightweight, fast, and powerful code editor.",
    string_and_links: [
      {
        string: "Install the extension",
        link: "https://marketplace.visualstudio.com/items?itemName=IbrahimCesar.ibrahimcesar-nextjs-developer-pack",
        eta: 1, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
  },
  {
    id: 2,
    title: "NextJS Framework",
    description:
      "A React framework for production. SSR by default. Automatic asset optimization, API caching, routing, and more.",
    string_and_links: [
      {
        string: "Get the basics!",
        link: "https://www.youtube.com/watch?v=__mSgDEOyv8&pp=ygUSbmV4dGpzIDEzIGZpcmVzaGlw",
        eta: 9, // in minutes
      },
      {
        string: "Showcase",
        link: "https://nextjs.org/showcase",
        eta: 1, // in minutes
      },
      {
        string: "Learn how to create a component/widget. Onboard Tailwind CSS and Storybook first!",
        link: "https://www.youtube.com/watch?v=kTSwLLFa3WM&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=2&ab_channel=mewtru",
        eta: 13, // in minutes
      },
      {
        string:
          "kebab-case for folders. PascalCase for files and component names, type, enum, class, interface. camelCase for variables and functions.",
        link: "https://gist.github.com/anichitiandreea/e1d466022d772ea22db56399a7af576b#naming-conventions",
        eta: 2, // in minutes
      },
      {
        string: "Explore the Docs",
        link: "https://nextjs.org/docs",
        eta: 15, // in minutes
      },
      {
        string: "Full course",
        link: "https://mega.nz/folder/QOIwwDRY#tBdBNUJBh5Lf5ENIzVZqIA",
        eta: 73, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description:
      "A CSS framework for rapidly building custom designs. Shorthand utilities, build your layouts and styles.",
    string_and_links: [
      {
        string: "What is Tailwind?",
        link: "https://www.youtube.com/watch?v=mr15Xzb1Ook&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=3&pp=gAQBiAQB&ab_channel=Fireship",
        eta: 2, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
      {
        string: "Get the basics!",
        link: "https://www.youtube.com/watch?v=pfaSUYaSgRo&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=5&ab_channel=Fireship",
        eta: 13, // in minutes
      },
      {
        string: "Explore the docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 10, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/t/58/tailwind-css.svg",
  },
  {
    id: 4,
    title: "shadcn/ui",
    description:
      "Don't start building your components from scratch. Copy from shadcn/ui and customize from there. Only install what you need.",
    string_and_links: [
      {
        string: "Docs",
        link: "https://ui.shadcn.com/",
        eta: 10, // in minutes
      },
      {
        string: "Showcase",
        link: "https://ui.shadcn.com/examples/dashboard",
        eta: 1, // in minutes
      },
    ],
    icon: "https://avatars.githubusercontent.com/u/124599",
  },
  {
    id: 7,
    title: "Storybook",
    description:
      "Don't build your components blindly. Use Storybook to build them in isolation, and document them as you go. Start with your design system from Figma, and build from there.",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://www.youtube.com/watch?v=gdlTFPebzAU&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=18&pp=gAQBiAQB&ab_channel=Fireship",
        eta: 2, // in minutes
      },
      {
        string: "How to write a story.",
        link: "https://www.youtube.com/watch?v=P0WHt_L0-2g&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=11&ab_channel=Chromatic",
        eta: 14, // in minutes
      },
      {
        string: "Control your stories with arguments.",
        link: "https://www.youtube.com/watch?v=0gOfS6K0x0E&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=8&ab_channel=Chromatic",
        eta: 5, // in minutes
      },
    ],
    icon: "https://static-00.iconduck.com/assets.00/storybook-icon-icon-822x1024-bjettx7m.png",
  },
  {
    id: 6,
    title: "zustand",
    description: "A simple state management library, for production.",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://zustand-demo.pmnd.rs/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
        eta: 10, // in minutes
      },
    ],
    icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo512.png",
  },
  {
    id: 8,
    title: "auto-animate",
    description:
      "If you need simple animation, don't spend time learning a complex library. Use this one-liner to animate your components.",
    string_and_links: [
      {
        string: "Explore.",
        link: "https://auto-animate.formkit.com/",
        eta: 5, // in minutes
      },
    ],
    icon: "https://raw.githubusercontent.com/formkit/auto-animate/160f2733ebc686d27e2be55d0c0194bb9259da97/docs/assets/img/favicon.svg",
  },
  {
    id: 10,
    title: "Framer Motion",
    description:
      "In occasion, you'll need more complex animations. Use Framer Motion to animate your components easier.",
    string_and_links: [
      {
        string: "Explore.",
        link: "https://www.framer.com/motion",
        eta: 5, // in minutes
      },
    ],
    icon: "https://www.logggos.club/logos/framer-motion.svg",
  },
  {
    id: 9,
    title: "Playwright",
    description:
      "When building your web app, always test it on behalf of your users. Implement end-to-end tests with Playwright.",
    string_and_links: [
      {
        string: "Get up to speed.",
        link: "https://enreina.com/blog/e2e-testing-in-next-js-with-playwright-vercel-and-github-actions-a-guide-with-example/",
        eta: 10, // in minutes
      },
    ],
    icon: "https://playwright.dev/img/playwright-logo.svg",
  },
  {
    id: 11,
    title: "SST",
    description: "Deploy your Next.js app to AWS with ease, no need to think much about devops.",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://www.youtube.com/watch?v=JY_d0vf-rfw&list=PLe5NfF84B9rtks15dOnEL3e2TEU0wmyn_&index=20&pp=gAQBiAQB&ab_channel=Fireship",
        eta: 2, // in minutes
      },
      {
        string: "Tutorial",
        link: "https://dev.to/kumo/deploy-a-nextjs-app-for-free-on-aws-with-sst-3g28",
        eta: 10, // in minutes
      },
      {
        string: "Docs",
        link: "https://sst.dev/",
        eta: 3, // in minutes
      },
    ],
    icon: "https://avatars.githubusercontent.com/u/66570915",
  },
]
