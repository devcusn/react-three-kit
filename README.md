# React Three Kit

A 3D visualization project built with React Three Fiber and React Three Drei.

## Tech Stack

- React
- Three.js
- React Three Fiber
- React Three Drei
- TypeScript
- Vite

## Features

- 3D cylinder visualization with customizable properties
- Orbital controls for camera manipulation
- Grid and axes helpers for spatial reference
- Ambient and directional lighting setup
- Configurable camera positioning

## Project Structure

```
react-three-kit/
├── src/
│   ├── components/
│   │   └── Cylinder.tsx
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   ├── style.module.css
│   └── index.css
├── public/
└── node_modules/
```

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

## Usage

The app renders a 3D scene with a red cylinder. Users can:

- Orbit around the scene using mouse controls
- View the 3D space with grid and axes helpers
- Adjust lighting and camera positions via props

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
