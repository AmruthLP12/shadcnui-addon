# shadcnui-addon

## Goal
A collection of UI helper components and demos built on top of [shadcn/ui], Next.js, Tailwind, and Radix UI.  
This project makes it easier for new users to explore plug-and-play components with working examples.

## Project Overview

The shadcnui-addon is an extension of the [shadcn/ui](https://github.com/shadcn-ui/ui) component library, offering additional free and customizable components to enhance your projects. Built with Next.js and TypeScript, this library aims to provide developers with ready-to-use components that can be easily integrated into applications. ([github.com](https://github.com/AmruthLP12/shadcnui-addon))

## Installation Instructions

You need Node.js 18+ (latest LTS recommended).

# clone your fork
git clone https://github.com/AmruthLP12/shadcnui-addon.git
cd shadcnui-addon

# install dependencies
    Depending on your package manager, run one of the following commands:
   - Using npm:
     ```bash
     npm install
     ```
   - Using yarn:
     ```bash
     yarn install
     ```
   - Using pnpm:
     ```bash
     pnpm install
     ```
   - Using bun:
     ```bash
     bun install
     '''

# run dev server
    Depending on your package manager, run one of the following commands:
   - Using npm:
     ```bash
     npm run dev
     ```
   - Using yarn:
     ```bash
     yarn dev
     ```
   - Using pnpm:
     ```bash
     pnpm dev
     ```
   - Using bun:
     ```bash
     bun dev
     ```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**

## What’s included  

 AnimatedProgressBar — animated progress bar with configurable color, height and duration
 BackgroundOverlayCard — card component with a background image overlay and content slot
 InvoiceTable — a responsive invoice / table layout example
 KanbanBoard — small kanban-style board with drag/drag-like UI (no real persistence)
 API Route — /app/api/component-code returns component source code (example: /api/component-code?component=AnimatedProgressBar).



## Development notes

Node 18+ recommended.
 npm run dev starts Next.js in dev mode.
 npm run build builds for production.
 The small API route at /app/api/component-code/route.ts exposes file contents for severalcomponents — helpful for  example pages


 ## Adding screenshots

 Save images to /public/images/ (create the folder if missing).
 Use markdown in README: ![Screenshot description](/images/your-screenshot.png)



## Contributing

Contributions are welcome! If you have suggestions for new components, improvements, or bug fixes, please open an issue or submit a pull request. For major changes, it's recommended to discuss them first to ensure alignment with the project's goals.


## How to contribute
 
1. Fork the repo (you already have a fork).
2. Create a feature branch:
   git checkout -b enhance/readme-issue-5
3. Make your edits (e.g., README).
4. Commit with a clear message:
   git commit -m "docs: improve README for clarity — closes #5"


## License

This project is licensed under the MIT License.
