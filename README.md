[Переключиться на русский язык.](README_RUS.md)

# Geotek College Website


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repository:
```bash
git clone https://github.com/MOSTDORGEOTREST/geotek_college_website.git
# or
git clone git@github.com:MOSTDORGEOTREST/geotek_college_website.git
```

Then navigate to the project directory:
```bash
cd geotek_college_website
```

### Development Mode
To run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production Build
To build and run the production version without Docker:
```bash
npm install && npm run build && npm run start
# или
yarn install && yarn build && yarn start
# или
pnpm install && pnpm build && pnpm start
# или
bun install && bun build && bun start
```

### Docker Deployment
To update docker-compose inside the project, simply run the Updater.sh file as root from the project root.
```bash
sudo bash Updater.sh
```
### For manual Docker update without using Updater:
1. Build the app:
```bash
docker-compose run --rm app sh -c "npm install && npm run build"
```
2. Recreate containers:
```bash
docker-compose up --force-recreate --build -d
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
Check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
