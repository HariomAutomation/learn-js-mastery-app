# JS Mastery — Desktop Course App

A comprehensive JavaScript learning desktop application built with Electron, Vite, and React. Master JavaScript from fundamentals to advanced concepts with **1,893+ hands-on exercises** across **38 lessons** in **13 modules**.

![JS Mastery](https://img.shields.io/badge/JS-Mastery-blue?style=for-the-badge&logo=javascript&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Features

- **13 Complete Modules** — From Variables to OOP Patterns
- **38 In-Depth Lessons** — Each with detailed markdown content
- **1,893+ Practice Exercises** — Topic-specific with starter code, solutions, tests, and hints
- **Built-in Quiz Engine** — Auto-tracking progress after quiz completion
- **Code Editor** — CodeMirror-powered with JavaScript syntax highlighting
- **Progress Tracking** — Zustand-powered state management
- **Offline Support** — Learn anywhere, no internet required
- **Cross-Platform** — Windows, macOS, and Linux

## Course Structure

| # | Module | Lessons | Exercises |
|---|--------|---------|-----------|
| 01 | Variables & Declarations | 3 | 108 |
| 02 | Data Types | 3 | 150 |
| 03 | Operators | 2 | 100 |
| 04 | Control Flow | 2 | 100 |
| 05 | Loops | 3 | 150 |
| 06 | Functions | 4 | 200 |
| 07 | Arrays | 3 | 150 |
| 08 | Objects | 3 | 150 |
| 09 | Strings | 3 | 150 |
| 10 | DOM Manipulation | 3 | 150 |
| 11 | Events | 3 | 150 |
| 12 | Async JavaScript | 3 | 150 |
| 13 | OOP | 3 | 150 |
| **Total** | | **38** | **1,893+** |

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Desktop:** Electron 33
- **Bundler:** Vite 5
- **State:** Zustand
- **Code Editor:** CodeMirror 6
- **Markdown:** react-markdown + remark-gfm
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HariomAutomation/learn-js-mastery-app.git
cd learn-js-mastery-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the app
npm run build

# Output will be in dist/ directory
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite + Electron) |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Run TypeScript type checking |

## Exercise Format

Each exercise follows a consistent format:

```json
{
  "id": "01-variables-declarations-variables-intro-01",
  "title": "Declare and log a variable",
  "starterCode": "const x = 10\nconsole.log(x)",
  "solution": "const x = 10\nconsole.log(x)",
  "tests": [{ "input": [], "expected": "10" }],
  "hints": ["Use const for constants"]
}
```

## Project Structure

```
js-mastery-app/
├── electron/              # Electron main process
│   ├── main.ts
│   ├── preload.ts
│   └── sandbox/
├── src/
│   ├── components/        # React components
│   │   ├── CodeEditor/
│   │   ├── LessonViewer/
│   │   ├── QuizEngine/
│   │   └── Sidebar/
│   ├── content/           # Course content
│   │   ├── 01-variables-declarations/
│   │   │   ├── lessons/
│   │   │   ├── exercises/
│   │   │   └── quizzes/
│   │   ├── 02-data-types/
│   │   └── ... (13 modules)
│   ├── state/             # Zustand store
│   ├── types/             # TypeScript types
│   └── utils/             # Utilities
├── generate-all-exercises.mjs  # Exercise generator
├── electron-builder.yml
└── package.json
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**HariomAutomation** — [GitHub](https://github.com/HariomAutomation)

---

Made with ❤️ for JavaScript learners everywhere.
