# Sudoku Arcade

A retro-inspired Sudoku web app built with React, Redux, and Material UI, featuring arcade-style visuals and smooth user experience.

## Features

- Play Sudoku puzzles of varying difficulty (Easy, Medium, Hard, Random)
- Beautiful arcade/retro UI with custom loaders and effects
- Responsive design for desktop and mobile
- Validate your solution or auto-solve the puzzle
- Persistent game state in local storage
- Toast notifications for feedback

## Tech Stack

- React 19 + TypeScript
- Redux Toolkit for state management
- Material UI (MUI) for components and theming
- Vite for fast development
- Axios for API requests
- [Sugoku API](https://sugoku.onrender.com/) for puzzle generation/validation/solving

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
src/
  components/
    atoms/         # Core UI elements (buttons, loaders)
    layouts/       # Page layout wrappers
    organisms/     # Complex UI blocks (SudokuGrid, PlayGameActions)
    pages/         # Page-level components (StartGame, PlayGame)
  services/        # API logic
  stores/          # Redux slices and store
  types/           # TypeScript types
  theme.ts         # MUI theme customization
  constants.ts     # App constants
```

## Credits
- Sudoku puzzles powered by [Sugoku API](https://sugoku.onrender.com/)
- Retro font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
