# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Arrange

```bash
npm run build && pm2 start ecosystem.config.js
```
  
### Analyze

  ```bash
  npx nuxi analyze
  ```

### Chinese font optimize

  You can use this tool [中文网字计划](https://chinese-font.netlify.app/online-split/) to optimize Chinese fonts.
  