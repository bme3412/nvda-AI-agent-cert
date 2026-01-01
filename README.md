# NVDA Summaries Viewer

A TypeScript/Next.js application for viewing and navigating NVDA agentic certification summaries.

## Features

- **Sidebar Navigation**: Browse all summaries organized by subfolders
- **File Viewer**: Click on any file to read its full content in the main area
- **Responsive Design**: Clean, modern UI with smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```
├── app/
│   ├── api/
│   │   └── summaries/
│   │       ├── route.ts          # API to list directory structure
│   │       └── [path]/route.ts   # API to read file content
│   ├── components/
│   │   ├── Sidebar.tsx           # Left sidebar with file tree
│   │   ├── Sidebar.module.css
│   │   ├── ContentViewer.tsx      # Main content area
│   │   └── ContentViewer.module.css
│   ├── page.tsx                   # Main page layout
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── summaries/                     # Your summaries directory (read-only)
└── package.json
```

## Usage

1. The sidebar on the left shows all folders and files from the `summaries/` directory
2. Click on folders to expand/collapse them
3. Click on any `.txt` file to view its content in the main area
4. The selected file is highlighted in the sidebar

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- The app reads files directly from the `summaries/` directory in the project root
- Only `.txt` files are displayed and accessible
- Path traversal is prevented for security

