## Intro

The next.js app router defines how the api folder is structured. Each route is a route.ts file inside of a folder (route name).

[Next.js api documentation](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

## Routes

**contacts:** This route is used to handle submissions from the contact form component [ContactFormRoutes](../../components/ContactFormRoutes.tsx). There are different services that can be supported by this route and are determined by the formService field in the website JSON.

Errors that arise from the contacts route are handled by [errors.ts file](../../services/contact-us-form/errors.ts). For every error in the api process a random Error ID uuid is created and logged.

## Form Services

**webhook (default):** hits a service at [make.com](make.com) to send emails to the clientEmail provided in website creation.
**BMP:** form service is active when a BMP business ID is passed during website creation.
**SES:** Amazons Simple Email Service (requires AWS env variables)
**s3FilePost:** Post contact to S3 (requires AWS env variables)
**mailchimpSubmit:** Submit lead to mailchimp (requires mailchimp ID in json)
