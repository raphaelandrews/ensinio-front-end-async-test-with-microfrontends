# Ensinio Frontend Async Test with Microfrontends

This is a test for an internship opportunity at [Ensinio](https://ensinio.com). Built by **[ndrws](https://ndrws.dev).**

Another version with Next.js 14 App router and without microfrontends can be found [here](https://github.com/raphaelandrews/ensinio-front-end-async-test).

**[Test requirements](https://github.com/EnsinioOrg/front-end-async-test)** <br/>

## What's inside?

This is a monorepo microfrontend with Turborepo and Module Federation and includes the following packages/apps:

## Apps and Packages

- `host`: The container application with Next.js 13 pages router who encapsulates the other applications.
- `hero`: Another Next.js App with the Hero section.
- `features`: Another Next.js App with the Features section.
- `ui`: A stub React component library shared by all applications.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `tsconfig`: `tsconfig.json`s used throughout the monorepo.
- `i18Next-Shared-lib`: This implements the i18n in all applications.

## Stack

- **Deployment**: Vercel
- **Framework**: Next.js 13 Pages router with Typescript for all applications.
- **Styling**: Styled-components. Note: Imported Bricolage Grotesque instead Degular font.
- **Animations**: Framer-motion. Since Ensinio uses Framer for their landing page, I chose framer-motion for animations instead of raw CSS. Not the same thing as use framer, but definitely a thing.
- **State management**: Zustand.
- **Tests**: Jest and React Testing Library
- **i18n**: React i18next
- **Package management**: PNPM

## Run

```
git clone https://github.com/raphaelandrews/ensinio-front-end-async-test-with-microfrontends.git
cd ensinio-front-end-async-test-with-microfrontends
code .
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### App

To develop all apps and packages, run the following command:

```
pnpm dev
```
