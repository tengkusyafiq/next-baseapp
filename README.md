# Next.js Baseapp for product-ready project

## 🚀 Quick Start

This is an opinionated baseapp for product-ready project to be used as a starting point for your project. To start, run the following commands in your terminal:

```bash
pnpm install
```

To start the development server with storybook, run the following command in your terminal. This is helpful for developing components in isolation.

```bash
pnpm dev-storybook
```

To start the development server, run the following command in your terminal.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you are new to Next.js, you can go through the home page to learn more about the baseapp.

## Onboarding list

- [ ] Standard naming convention [#](#standard-naming-convention)
- [ ] Next.js files and folder structure cheat sheet [#](#nextjs-files-and-folder-structure-cheat-sheet)
- [ ] How to structure the files and folders [#](#how-to-structure-the-files-and-folders)
- [ ] When to use server side rendering VS client side rendering [#](#when-to-use-server-side-rendering-vs-client-side-rendering)
- [ ] Standard server state management with SWR [#](#standard-server-state-management-with-swr)
- [ ] Standard client state management with zustand [#](#standard-client-state-management-with-zustand)
- [ ] Design system with Storybook [#](#design-system-with-storybook)
- [ ] Standard UI components with shadcn UI [#](#standard-ui-components-with-shadcn-ui)
- [ ] Setting up a page layout [#](#setting-up-a-page-layout)
- [ ] Setting up translation
- [ ] Setting up environments
- [ ] CRUD example walkthrough: Article
- [ ] Setting up SEO
- [ ] Setting up TDD
- [ ] Setting up CI/CD on AWS
- [ ] Setting up monitoring tools (Analytics and Crashlytics)
- [ ] Add example: logging
- [ ] Add example: error handling

## 📖 Documentation

### Standard naming convention

1. All files and folders name should be in **kebab-case**. Eg: `toggle-button.tsx` or `leave-management/`.
2. All variables and functions should be in **camelCase**. eg: `const isButtonDisabled = true;` or `function toggleButton() {}`.
3. All React components should be in **PascalCase**, so it can be called as a React component. Eg: `<Button/>`.
4. All Interfaces should be in **PascalCase**, and it should have a prefix of `I` or suffix of `Props`, such as `interface IButton {}` or `interface ButtonProps {}`. Eg:

    ```ts
    interface IButtonProps {
        isDisabled: boolean;
    }
    ```

5. All Types should be in **PascalCase**, and it should have a prefix of `T`. Eg:

   ```ts
   type TUser = {
      name: string;
   }
   ```

6. All Enums AND its contents should be in **PascalCase**, and it should have a prefix of `E`. Eg:

    ```ts
    EButtonColor {
        Primary,
        Secondary,
        Tertiary
    }
    ```

7. All Classes name should be in **PascalCase**.

### Next.js files and folder structure cheat sheet

1. The website structure will follow the `app` folder. Each folder that have `page.tsx` will be considered a website directory.
`app/page.tsx` will be `https://example.com/`.
`app/articles/page.tsx` will be `https://example.com/articles`.
`app/articles/[id]/page.tsx` will be `https://example.com/articles/1`.
2. You can group multiple directory with `()` and the folder with `()` is hidden from the URL. For example, `app/(modules)/articles/page.tsx` will be `https://example.com/articles`.
3. You can exclude a folder from the URL by prefixing it with `_`. For example, `app/_components/anything.tsx`.
4. You can create a dynamic route by prefixing the folder with `[]`. For example, `app/[id]/page.tsx` will be `https://example.com/1`.
5. See example on this project to know how to pass arguments from the URL.
6. Read more here. [#](https://nextjs.org/docs/app/building-your-application/routing)

### How to structure the files and folders

Your project should be structured as follows:

```bash
├── app
│   ├── (modules)
│   │   ├── leave-management (example)
│   │   │   ├── _types
│   │   │   │   ├── t-leave.tsx
│   │   │   ├── _components
│   │   │   │   ├── client-components
│   │   │   │   │   ├── create-button.tsx
│   │   │   │   │   ├── update-button.tsx
│   │   │   │   ├── server-components
│   │   │   │   │   ├── delete-button.tsx
│   │   │   ├── _data
│   │   │   │   ├── leave-client.tsx
│   │   │   │   ├── utils.tsx
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx
│   │   │   │   ├── edit
│   │   │   │   │   ├── page.tsx
│   │   │   ├── create
│   │   │   │   ├── page.tsx
│   │   │   ├── page.tsx
├── components
│   ├── toggle-button (example)
│   │   ├── toggle-button.tsx
│   │   ├── toggle-button.stories.tsx
├── public
|   ├── general
|   │   ├── default-avatar.png
|   ├── modules
|   │   ├── leave-management (example)
|   │   │   ├── example-image.png
├── styles
├── utils
```

#### Root level

1. The main app directory is in the `@/app/` folder.
2. For shared components, they should be in the `@/components` folder.
3. Each shared component file should have their own folder. For example, the `Button` component should be in the `@/components/button` folder.
4. Each shared component should have their own storybook file. For example, the `button` component should have a `button.stories.tsx` file. This way, all developers can explore the component in isolation.
5. All static files should be in the `@/public` folder.
6. All global styles should be in the `@/styles` folder.
7. All shared utils should be in the `@/utils` folder.

#### Feature level

1. Each main features should be in its own folder in the `@/app/(modules)`. For example, the `articles` feature should be in the `articles` folder. Or the `leave-management` feature should be in the `leave-management` folder.
2. For customized components on a per feature basis, they should be in the feature directory, which is `_components`. For example, the `articles` feature should have its own `@/app/articles/_components` folder.

### When to use server side rendering VS client side rendering

1. For most pages, please use SSR so the first-paint will be faster. Then all dynamic contents inside the page can be rendered on client side. Why? We can use our state management to optimize the UX.
2. Read more here [#](https://nextjs.org/docs/getting-started/react-essentials#server-components)

### Standard server state management with SWR

Development done. Pending documentation

### Standard client state management with zustand

Development done. Pending documentation

### Design system with Storybook

Development done. Pending documentation

### Standard UI components with shadcn UI

Development done. Pending documentation

### Setting up a page layout

1. Read more here [#](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

### Setting up environments

Development done. Pending documentation

## TODO

### Pagination Example

[ref](https://swr.vercel.app/docs/pagination)

### Infinite scrolling Example

[ref](https://swr.vercel.app/examples/infinite-loading)

### Handling form Example

[ref](https://dev.to/hellodemola/handle-form-better-in-nextjs-with-react-hook-form-3o61)

[ref](https://tkdodo.eu/blog/react-query-and-forms)