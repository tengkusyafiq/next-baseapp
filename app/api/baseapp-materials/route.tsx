import { NextResponse } from "next/server"

const materials = [
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
    id: 2,
    title: "NextJS Framework",
    description:
      "A React framework for production. SSR by default. Automatic asset optimization, API caching, routing, and more.",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Explore the Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "",
    string_and_links: [
      {
        string: "What is Tailwind?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
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
    title: "Radix UI",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/r/79/radix-ui.svg",
  },
  {
    id: 5,
    title: "VS Code",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
  },
  {
    id: 6,
    title: "zustand",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo512.png",
  },
  {
    id: 7,
    title: "Storybook",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://static-00.iconduck.com/assets.00/storybook-icon-icon-822x1024-bjettx7m.png",
  },
  {
    id: 8,
    title: "auto-animate",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://raw.githubusercontent.com/formkit/auto-animate/160f2733ebc686d27e2be55d0c0194bb9259da97/docs/assets/img/favicon.svg",
  },
  {
    id: 9,
    title: "Playwright",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://playwright.dev/img/playwright-logo.svg",
  },
  {
    id: 10,
    title: "Framer Motion",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://www.logggos.club/logos/framer-motion.svg",
  },
  {
    id: 11,
    title: "SST",
    description: "",
    string_and_links: [
      {
        string: "What is this?",
        link: "https://tailwindcss.com/",
        eta: 1, // in minutes
      },
      {
        string: "Docs",
        link: "https://tailwindcss.com/docs/utility-first",
        eta: 1, // in minutes
      },
      {
        string: "Showcase",
        link: "https://tailwindui.com/components/preview",
        eta: 1, // in minutes
      },
    ],
    icon: "https://avatars.githubusercontent.com/u/66570915",
  },
]

// index API
export async function GET() {
  return NextResponse.json(materials)
}
