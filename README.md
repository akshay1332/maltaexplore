# Malta Tourism Website

A modern, interactive website for exploring Malta's ancient wonders, built with React, TypeScript, and Tailwind CSS.

## Features

- Interactive 3D gallery with hover effects
- Smooth animations and transitions
- Responsive design for all devices
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Performance optimized

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Spring
- Lucide Icons
- Shadcn/ui Components

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd my-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment

### Build Configuration

The project uses Vite for building. The production build will be output to the `dist` directory.

### Environment Variables

Create a `.env` file in the root directory and add any necessary environment variables:

```env
VITE_API_URL=your_api_url
```

### Deployment Platforms

The project can be deployed to:

1. Vercel (Recommended):
   - Connect your GitHub repository
   - Import the project
   - Vercel will automatically detect it's a Vite project

2. Netlify:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. GitHub Pages:
   - Update `vite.config.ts` with your base URL
   - Run `npm run build`
   - Deploy the `dist` directory

## Performance Optimization

- Images are optimized and lazy-loaded
- Code splitting implemented
- Tree shaking enabled
- Proper caching headers recommended
- Animations optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
