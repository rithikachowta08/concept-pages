# Byjus US Math Concept Pages

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs the dependencies of the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run format`

Formats the files using Prettier

## Libraries used

- React Router for routing each concept page using URL
- [React Full Page](https://github.com/alvarotrigo/react-fullpage) for full page scrolling

## Project structure

- `src`

  - `components`: Common and base components like button, title, subtitle
  - `pages`: Each concept page is kept in its own folder. This folder contains index.js as its entry point and has a file for each slide in the page
  - `data`: Static text data
  - `hooks`: Custom hooks
  - `services`: Routing, networking, TTS
  - `utils`: Common util functions
  - `assets`: Static images, video, audio

  ## Dev dependencies

  - `eslint` for linting JS errors. Install extension from `.vscode/extensions.json` for code editor support
  - `prettier` for code formatting. Install extension from `.vscode/extensions.json` for code editor support
  - `sass` for SCSS support

  ## Additional info

  - Absolute imports are configured. Any file in the `src` directly can be absolutely imported. Eg: Instead of `../../components/Button/Button.js`, we can use `components/Button/Button.js`
