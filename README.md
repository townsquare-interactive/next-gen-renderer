This project renders websites using next.js and json files from Amazon S3. The site content depends on the domain hosted on vercel or if running locally the env variable named NEXT_PUBLIC_CMS_URL (read below for landing page site guide).

## Getting Started

If running locally, set the env variable "NEXT_PUBLIC_CMS_URL" to the site name/apexID in S3 or use the single site render strategy noted below.
Then, run the development server:

```bash
npm i
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Testing set up through vitest. To run tests

```bash
npm run test
```

## Landing Pages Access guide

Accessing landing page sites under a single URL works a little differently than normal sites on Apex. The domain name "www.townsquareignite.com" is used to access these landing pages when using this format "www.townsquareignite.com/landing/s3Folder/pageName". This allows us to render all of our landing pages under the townsquareignite domain.

When accessing these pages locally "localhost:3000/landing" should have the same effect as above.

You are also able to render these sites by setting the env variable NEXT_PUBLIC_CMS_URL.

[Landing Page Creation AI Tool](https://www.townsquareignite.ai/)

## Other Documentation Files

-   [API Documentation](/app/api/README.md)
-   [Apex Transformer Repo](https://github.com/townsquare-interactive/next-gen-transformer)

## Env Variables used

-   NEXT_PUBLIC_CMS_URL: ApexID for site you wish to render (lines up with s3 Folder)
-   BUCKET_URL: S3 bucket being used (has default)
-   VCITA_TOKEN: Token for sending form to BMP clients
-   VCITA_SANDBOX_TOKEN: Sandbox token for sending VCITA BMP form
-   VCITA_SANDBOX_ON: Value to turn on VCITA sandbox environment (1 or 0)

## Folder Structure

This project uses the next.js app router and that is where you will find the pages being rendered. [Learn more about the app router](https://nextjs.org/docs/app).

-   components: This directory holds the primary next.js components being used in the project (also see elements folder)
-   app/[domain]: Contains the page files being rendered per site as well as the head section fo the HTML
-   schema: Here you can find the zod schema objects used in the project.
-   utils: Utility functions used throughout the project
-   [middleware.ts](<(/middleware.ts)>): This file handles the logic behind getting the domain and redirects

## Styles

This project uses SCSS and CSS Modules. Components will have corresponding scss files in their same directory that have styles specific to that component. For global styles see the styles directory at the root of the project. This directory also has the commonly used SCSS variables and SCSS utility functions.

## Component Library

This project uses storybook to document components and allows you to play around and see the different variations possible
[Storybook deployment](https://new-render-component-storybook.vercel.app/)

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
