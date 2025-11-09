# Word Impostor

A multiplayer social deduction word game inspired by Among Us. Players receive secret words, but some are impostors who don't know the actual word. Your goal is to find the impostors without revealing the secret word.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Game Modes](#game-modes)
- [Project Structure](#project-structure)
- [Data Format](#data-format)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Two Game Modes**: Classic mode and Special mode with unique word pairs
- **Flexible Player Count**: Support for 3-10 players
- **Adjustable Impostor Count**: Configure the number of impostors in each game
- **Multiple Hint System**: Impostors receive multiple hints to help them blend in
- **Themed Categories**: 10 themed word categories including Food, Animals, Technology, and more
- **Multi-language Support**: Full support for English and Russian
- **Impostor Visibility Options**: Choose whether impostors know each other
- **Modern UI**: Clean and responsive design built with React and Tailwind CSS
- **Offline Play**: No internet connection required for gameplay

## Live Demo

Play the game online: [Word Impostor Live Demo](https://word-impostor-indol.vercel.app/)

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Language**: TypeScript 5.5.0
- **Styling**: Tailwind CSS 3.4.18
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.x or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kannoqwe/Word-Impostor.git
cd Word-Impostor
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

1. Build the project:
```bash
npm run build
```

2. Preview the production build locally:
```bash
npm run preview
```

The optimized production files will be generated in the `dist` directory.

## Game Modes

### Classic Mode
In classic mode, all regular players receive the same word, while impostors receive multiple hints about the word without knowing what it is.

### Special Mode
In special mode, regular players receive the actual word while impostors receive a special related word that is different but thematically similar.

## Project Structure

```
Word-Impostor/
├── src/
│   ├── app/           # Application context and providers
│   ├── components/    # Reusable React components
│   ├── data/
│   │   ├── locales/   # Translation files (en.json, ru.json)
│   │   └── words/     # Word datasets (words_en.json, words_ru.json)
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── dist/              # Production build output
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Data Format

### Word Dataset Structure

Each language has a word dataset file (`words_en.json`, `words_ru.json`) organized by themes:

```json
{
  "food_and_drinks": [
    {
      "word": "pizza",
      "hints": [
        "round",
        "italy",
        "cheese",
        "slices",
        "oven"
      ],
      "special": "burger"
    }
  ]
}
```

- `word`: The actual word shown to regular players
- `hints`: Array of hints shown to impostors in classic mode
- `special`: Alternative word shown to impostors in special mode

### Locale Structure

Translation files (`en.json`, `ru.json`) contain all UI text:

```json
{
  "subtitle": "Find the impostor among players",
  "numPlayers": "Players",
  "numImpostors": "Impostors",
  "startGame": "Start Game",
  "themes": {
    "food_and_drinks": "Food and Drinks"
  }
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues

## Contributing

Contributions are welcome! Here are some ways you can contribute:

1. Add new words and hints to existing themes
2. Create new themed categories
3. Add support for additional languages
4. Improve UI/UX
5. Fix bugs and improve performance

Please ensure your code follows the existing code style and passes linting before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Kanno

---

Made by [kannoqwe](https://github.com/kannoqwe)
