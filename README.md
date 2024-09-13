This project renders websites using next.js and json files from Amazon S3. The site content depends on the domain hosted on vercel or running locally the env variable named NEXT_PUBLIC_CMS_URL (read below for landing page site guide).

## Getting Started

If running locally, set NEXT_PUBLIC_CMS_URL to the site name/apexID in S3 or use the single site render strategy noted below.
Then, run the development server:

```bash
npm i
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Landing Pages Access guide

Accessing landing page sites under a single URL works a little differently than normal sites on Apex. The domain name "www.townsquareignite.com" is used to access these landing pages when using this format "www.townsquareignite.com/landing/s3Folder/pageName". This allows us to render all of our landing pages under the townsquareignite domain.

When accessing these pages locally "localhost:3000/landing" should have the same effect as above.

You are also able to render these sites by setting the env variable NEXT_PUBLIC_CMS_URL.

[Landing Page Creation AI Tool](https://www.townsquareignite.ai/)

## Other Documentation Files

-   [API Documentation](/app/api/README.md)
-   [Apex Transformer Repo](https://github.com/townsquare-interactive/next-gen-transformer)

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
