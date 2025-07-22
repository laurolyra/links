# Links - Personal Links Page

A personal links page built with React + TypeScript + Vite, deployed on GitHub Pages.

## Live Demo

Visit the live site: [https://laurolyra.github.io/](https://laurolyra.github.io/)

## Development

This project uses React with TypeScript and Vite for fast development and building.

### Local Development

```bash
npm install
npm run dev
```

### Deployment

This project is configured for GitHub Pages deployment using the gh-pages package.

To deploy:

```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://laurolyra.github.io/`

**Important**: Make sure to:
1. Enable GitHub Pages in your repository settings and set the source to the `gh-pages` branch
2. If this is your main GitHub Pages site, you might need to deploy to the `main` branch instead of `gh-pages` (see instructions below)

### Deploying to Main GitHub Pages Site (laurolyra.github.io)

If you want this to be your main GitHub Pages site (laurolyra.github.io), you have two options:

#### Option 1: Deploy to main branch (Recommended)
1. Rename your repository to `laurolyra.github.io`
2. Update the deploy script in package.json:
   ```json
   "deploy": "gh-pages -d dist -b main"
   ```
3. Run `npm run deploy`

#### Option 2: Keep current setup
1. Keep the repository name as `links`
2. In GitHub repository settings → Pages → Source → select "Deploy from a branch"
3. Set branch to `gh-pages` and folder to `/ (root)`
4. Run `npm run deploy`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
