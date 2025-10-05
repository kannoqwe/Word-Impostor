# Word Impostor

**Word Impostor** is a multiplayer social deduction word game inspired by games like *Among Us*.
Players are given secret words, but some players are impostors who do not know the actual word.
The goal is to guess the secret word while trying to identify the impostors.

---

## Features

- Multiplayer support (3–10 players)
- Choose the number of impostors
- Customizable player names
- Multiple word categories (themes)
- Hints for Impostors
- Available in **English** and **Russian**

---

## Word Data Structure

Words are stored in `words.ts` with the following structure:

```ts
export const words = {
  ru: {
    animals: [
      { word: 'Кошка', hint: 'Рева', special: 'Бегемот' },
      ...
    ],
    food: [...],
    ...
  },
  en: {
    animals: [
      { word: 'Cat', hint: 'Meow', special: 'Hippo' },
      ...
    ],
    food: [...],
    ...
  }
} as const;
```

- `word` – the main word for the round  
- `hint` – one-word clue  
- `special` – impostor word (for new mode)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kannoqwe/Word-Impostor.git
cd Word-Impostor
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

---

## License

MIT License © kannoqwe

