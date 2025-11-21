# Pokédex Browser

A responsive Pokémon browser built with React, TypeScript, and Tailwind CSS. Browse Pokémon with pagination or infinite scroll, and view detailed information for each Pokémon.

## Features

- **Two View Modes:**
  - Pagination view with page controls
  - Infinite scroll view with "Load More" button
  
- **Pokémon Detail Page:**
  - Comprehensive stats, abilities, and information
  - Separate route (not a modal)
  
- **Responsive Design:**
  - Fully responsive across desktop, tablet, and mobile
  - Adaptive grid layouts
  
- **Error Handling:**
  - Error boundaries for graceful error handling
  - Retry functionality
  
- **Loading States:**
  - Loading spinners and skeletons
  - React Suspense integration

## Tech Stack

- React 18
- TypeScript
- React Router
- React Query (TanStack Query)
- Tailwind CSS
- Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── services/       # API service layer
├── types/          # TypeScript type definitions
└── App.tsx         # Main app component with routing
```

## API

This application uses the [PokéAPI](https://pokeapi.co/) for Pokémon data.

