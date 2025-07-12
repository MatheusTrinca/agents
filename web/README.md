# Web Frontend

The interactive frontend for the Agents project - featuring real-time audio recording, AI-powered transcription, and intelligent Q&A capabilities.

## Core Features

### 🎤 Audio Recording Interface
- **Real-time audio capture** using MediaRecorder API
- **5-second chunked recording** for optimal processing
- **Live upload pipeline** with automatic server sync
- **Visual recording feedback** and controls
- **Microphone access** with browser permissions

### 🤖 AI-Powered Q&A System
- **Question submission** with natural language input
- **AI-generated answers** based on recorded audio content
- **Real-time response** from semantic search
- **Contextual understanding** through vector similarity

### 🏠 Room Management
- **Session organization** with room-based structure
- **Room creation** and navigation interface
- **Multi-room support** for different recording sessions

## Technologies Used

### Core Framework
- **React 19.1.0** - Modern React with latest features and concurrent rendering
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.0.3** - Fast build tool and development server

### Audio Processing
- **MediaRecorder API** - Browser-native audio recording
- **Web Audio API** - Audio stream processing and controls
- **dom-speech-recognition types** - TypeScript support for speech APIs

### UI & Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework with modern features
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React 0.525.0** - Beautiful & consistent icon library
- **class-variance-authority** - Component variant management
- **tw-animate-css** - Tailwind animation utilities

### State Management & Data Fetching
- **TanStack React Query 5.81.5** - Powerful data synchronization and caching
- **React Hook Form 7.60.0** - Performant forms with validation
- **Zod 4.0.0** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM 7.6.3** - Modern declarative routing

### Development Tools
- **ESLint 9.30.1** - Advanced code linting and formatting
- **TypeScript ESLint 8.35.1** - TypeScript-specific linting rules
- **@vitejs/plugin-react** - React integration for Vite

## Getting Started

### Prerequisites
- Node.js (latest stable version)
- npm or yarn

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

### Lint
```bash
npm run lint
```

## Project Structure
```
src/
├── components/                    # Reusable UI components
│   ├── ui/                       # Base UI components (Button, Card, etc.)
│   ├── create-room-form.tsx      # Room creation form
│   ├── question-form.tsx         # Q&A question submission
│   ├── question-item.tsx         # Individual Q&A display
│   ├── question-list.tsx         # Q&A list container
│   └── room-list.tsx             # Room navigation component
├── pages/                        # Page components
│   ├── create-room.tsx           # Room creation page
│   ├── record-room-audio.tsx     # Audio recording interface
│   └── room.tsx                  # Main room Q&A interface
├── http/                         # API client and types
│   ├── types/                    # TypeScript API type definitions
│   ├── use-create-question.ts    # Q&A API hook
│   ├── use-create-room.ts        # Room creation API hook
│   ├── use-room-questions.ts     # Q&A retrieval API hook
│   └── use-rooms.ts              # Room listing API hook
├── lib/                          # Utility functions
│   ├── dayjs.ts                  # Date formatting utilities
│   └── utils.ts                  # General utility functions
└── main.tsx                      # Application entry point
```

## User Interface Flow

### 1. Room Creation
- Users create new recording sessions
- Room management interface for navigation
- Session-based organization

### 2. Audio Recording
- **Start Recording** → Microphone access requested
- **Real-time Capture** → 5-second chunks automatically processed
- **Live Upload** → Each chunk sent to server for transcription
- **Visual Feedback** → Recording status and controls

### 3. Question & Answer
- **Question Input** → Natural language question submission
- **AI Processing** → Semantic search through transcribed audio
- **Answer Generation** → Contextual responses from Gemini AI
- **History Display** → Previous Q&A pairs shown chronologically

## Browser Requirements
- **Microphone access** - Required for audio recording
- **Modern browser** - Supports MediaRecorder API and ES2022
- **HTTPS connection** - Required for microphone permissions in production

## About
This is a study project focused on learning modern React development patterns, real-time audio processing, AI integration, and building interactive applications with semantic search capabilities.