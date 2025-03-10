# Cyberpunk Portfolio

A retro-futuristic portfolio website built with React, TypeScript, and Express, featuring a unique blend of Windows 95 and cyberpunk aesthetics. The site showcases AI art, code examples, resume, and personal information with engaging animations and interactive elements.

## Features

- 🎨 Cyberpunk/Windows 95 inspired design
- 🌟 Smooth animations and transitions using Framer Motion
- 💻 Modern React with TypeScript
- 🎯 Ant Design UI components with custom styling
- 🖼️ AI Art gallery with modal view
- 📝 Interactive code examples with syntax highlighting
- 📄 Stylized resume presentation
- 🚀 Express backend for API support

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Styled Components
  - Framer Motion
  - Ant Design
  - React Router DOM
  - React Syntax Highlighter

- Backend:
  - Express
  - Node.js
  - CORS

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   # Start frontend development server
   npm run dev

   # Start backend server (in a separate terminal)
   npm run server
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
portfolio-site/
├── src/
│   ├── components/
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── AiArt.tsx
│   │   ├── CodeExamples.tsx
│   │   ├── Resume.tsx
│   │   └── About.tsx
│   ├── App.tsx
│   └── main.tsx
├── server/
│   └── index.ts
├── public/
├── index.html
└── package.json
```

## Customization

1. Update the content in each page component under `src/pages/`
2. Add your AI artwork images to the public directory
3. Modify the color scheme in `src/main.tsx`
4. Update your resume information in `Resume.tsx`
5. Add your projects in `CodeExamples.tsx`

## Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

The Express server will serve the static files from the `dist` directory and handle API requests.

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project as a template for your own portfolio! 