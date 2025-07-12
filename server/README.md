# Server Backend

The AI-powered backend API for the Agents project - featuring real-time audio processing, speech transcription, and semantic search capabilities using Google Gemini AI.

## Core Capabilities

### 🎤 Audio Processing Pipeline
- **Real-time audio upload** via multipart file handling
- **Automatic speech transcription** using Google Gemini 2.5 Flash
- **Semantic embedding generation** with text-embedding-004 model
- **Vector storage** in PostgreSQL with pgvector extension

### 🤖 AI Integration
- **Google Gemini API** for speech-to-text and natural language processing
- **Portuguese language optimization** for Brazilian users
- **Contextual Q&A generation** based on transcribed audio content
- **Semantic similarity search** using cosine distance calculations

### 💾 Database Features
- **Vector database** with 768-dimensional embeddings
- **Room-based organization** for session management
- **Real-time audio chunk storage** with automatic indexing
- **Scalable search** through pgvector operations

## Technologies Used

### Core Framework
- **Node.js** - JavaScript runtime with experimental TypeScript support
- **Fastify 5.4.0** - Fast and low overhead web framework
- **TypeScript 5.8.3** - Type-safe JavaScript development

### AI & ML Integration
- **@google/genai** - Google Gemini AI SDK for transcription and embeddings
- **Vector embeddings** - 768-dimensional semantic representations
- **Natural language processing** - Portuguese-optimized AI responses

### Database & ORM
- **PostgreSQL 17** - Relational database with pgvector extension
- **pgvector** - Vector similarity search and storage
- **Drizzle ORM 0.44.2** - Type-safe SQL ORM for TypeScript
- **Docker** - Containerized database setup

### File Processing
- **@fastify/multipart** - Audio file upload handling
- **Chunked processing** - 5-second audio segments for optimal processing

### Validation & Types
- **Zod 3.25.75** - TypeScript-first schema validation
- **fastify-type-provider-zod** - Zod integration with Fastify

### Additional Features
- **@fastify/cors** - CORS support for cross-origin requests
- **Drizzle Kit** - Database migrations and schema management

## Getting Started

### Prerequisites
- Node.js (latest stable version)
- Docker and Docker Compose
- npm or yarn

### Installation
```bash
npm install
```

### Database Setup
```bash
# Start PostgreSQL with Docker
docker-compose up -d

# Generate database migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed
```

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## Database
- **PostgreSQL 17** with pgvector extension
- **Port**: 5432
- **Database**: agents
- **User**: docker
- **Password**: docker

## API Endpoints

### Room Management
- `POST /rooms` - Create new recording room
- `GET /rooms` - List all available rooms

### Audio Processing
- `POST /rooms/:roomId/audio` - Upload and process audio chunks
  - Transcribes audio using Google Gemini AI
  - Generates semantic embeddings
  - Stores in vector database for search

### Question & Answer System
- `POST /rooms/:roomId/questions` - Create question and get AI-generated answer
  - Performs semantic search through transcribed audio
  - Uses vector similarity to find relevant content
  - Generates contextual answers using Gemini AI
- `GET /rooms/:roomId/questions` - Retrieve Q&A history for room

## Project Structure
```
src/
├── db/
│   ├── connection.ts          # PostgreSQL + pgvector connection
│   ├── migrations/           # Database schema migrations
│   ├── schema/              # Database schema definitions
│   │   ├── rooms.ts         # Room management schema
│   │   ├── questions.ts     # Q&A storage schema
│   │   └── audio-chunks.ts  # Audio transcription + vector storage
│   └── seed.ts             # Database seeding utilities
├── http/
│   └── routes/             # API route handlers
│       ├── create-room.ts          # Room creation endpoint
│       ├── get-rooms.ts           # Room listing endpoint
│       ├── upload-audio.ts        # Audio processing pipeline
│       ├── create-questions.ts    # Q&A generation endpoint
│       └── get-room-questions.ts  # Q&A retrieval endpoint
├── services/
│   └── gemini.ts              # Google Gemini AI integration
├── server.ts                  # Main Fastify server
└── env.ts                    # Environment configuration
```

## Development Notes
- Uses Node.js experimental TypeScript support (`--experimental-strip-types`)
- Environment variables loaded from `.env` file
- Hot reload enabled in development mode with `--watch`
- Requires Google Gemini API key for AI functionality

## Environment Variables
Create a `.env` file in the server directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

## Audio Processing Workflow
1. **Audio Upload**: Client uploads 5-second audio chunks via multipart form
2. **Transcription**: Google Gemini 2.5 Flash converts audio to Portuguese text
3. **Embedding**: text-embedding-004 generates 768-dimensional semantic vectors
4. **Storage**: Transcription and embeddings stored in PostgreSQL with pgvector
5. **Search**: Q&A system uses cosine similarity to find relevant audio content
6. **Response**: Gemini AI generates contextual answers based on search results

## About
This is a study project focused on learning modern AI integration, vector databases, real-time audio processing, and building intelligent applications with semantic search capabilities using Google Gemini AI.