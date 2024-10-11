# NEXTJS SUPABASE BOILERPLATE 

<div align="center"><strong>Next.js 14 App router Dashboard Starter Template With Shadcn-ui</strong></div>
<div align="center">Used Latest Supabase SSR Package </div>
<br />

![image](https://github.com/user-attachments/assets/5ae9b1c9-32e8-420a-9d37-5aa5382d6e58)



## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth- [Supabase SSR](https://supabase.com/docs/guides/auth/server-side)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Auth - [Nextauth](https://next-auth.js.org)
- File Uploading - [Uploadthing](https://uploadthing.com)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

## Pages

| Pages                                                                             | Specifications                                                                                        |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| [Signup](https://next-shadcn-dashboard-starter.vercel.app/)                       | Authentication with **NextAuth** supports Social logins and email logins(Enter dummy email for demo). |
| [Dashboard](https://next-shadcn-dashboard-starter.vercel.app/dashboard)           | Cards with recharts graphs for analytics.                                                             |
| [Not Found](https://next-shadcn-dashboard-starter.vercel.app/dashboard/notfound)  | Not Found Page Added in the root level                                                                |
| -                                                                                 | -                                                                                                     |

## Getting Started

Clone this repo

Run the following commands to start the development server:

```
pnpm install
pnpm run dev
```

You should now be able to access the application at http://localhost:3000.

To generate types for Supabase linked tables, you can use the following command:

```sh
pnpm supabase gen types typescript --linked > database.types.ts
```

This command will generate TypeScript types for your linked tables in Supabase.
