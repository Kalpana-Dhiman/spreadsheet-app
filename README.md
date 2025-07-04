# Spreadsheet Application..

A modern, responsive spreadsheet interface built with React and TypeScript. This application provides an intuitive data management experience with features like filtering, sorting, and real-time data visualization.

## Features

- **Interactive Data Table**: View and manage job requests with comprehensive details
- **Advanced Filtering**: Filter data by status, priority, and other criteria
- **Sorting Capabilities**: Sort columns in ascending or descending order
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Modern UI**: Clean, professional interface with Tailwind CSS styling
- **Real-time Updates**: Dynamic data handling and state management

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icon library
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite for fast development and building
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kalpana-Dhiman/spreadsheet-app.git
cd spreadsheet-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/ui/          # Reusable UI components
├── screens/               # Main application screens
│   └── SpreadsheetStyle/  # Spreadsheet interface
│       └── sections/      # Component sections
├── lib/                   # Utility functions
└── index.tsx             # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
