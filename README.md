# Agents Project

An AI-powered audio transcription and Q&A system that enables real-time recording, intelligent speech processing, and contextual question answering using advanced machine learning.

## Project Overview

This full-stack application allows users to:
- **Record live audio** in real-time with automatic chunking
- **Transcribe speech to text** using Google Gemini AI (Portuguese optimized)
- **Ask questions** about recorded content using natural language
- **Get AI-generated answers** based on semantic search through transcribed audio
- **Manage recording sessions** with room-based organization

## Project Structure

This monorepo contains two main components:

- **`web/`** - React frontend with audio recording and Q&A interface
- **`server/`** - Node.js backend with AI integration and vector database

## Quick Start

### Prerequisites
- Node.js (latest stable version)
- Docker and Docker Compose
- npm or yarn
- Microphone access for audio recording

### Setup
1. **Backend Setup**:
   ```bash
   cd server
   npm install
   docker-compose up -d
   npm run db:generate
   npm run db:migrate
   npm run dev
   ```

2. **Frontend Setup**:
   ```bash
   cd web
   npm install
   npm run dev
   ```

3. **Environment Configuration**:
   - Set up Google Gemini API credentials in server `.env`
   - Ensure microphone permissions are enabled in your browser

## Core Features

### 🎤 Audio Processing
- Real-time audio recording with 5-second chunking
- Automatic speech-to-text transcription (Portuguese)
- Echo cancellation and noise suppression
- Instant upload and processing pipeline

### 🤖 AI Integration
- **Google Gemini 2.5 Flash** for speech transcription
- **text-embedding-004** for semantic vector generation
- Contextual question answering based on recorded content
- Brazilian Portuguese language optimization

### 🔍 Semantic Search
- 768-dimensional vector embeddings for content similarity
- PostgreSQL with pgvector extension for vector operations
- Cosine similarity matching for relevant content retrieval
- Intelligent context-aware answer generation

### 💾 Data Management
- Room-based session organization
- Vector database storage for semantic search
- Real-time data synchronization
- Persistent audio transcription history

## Technology Stack

**Frontend:**
- React 19 + TypeScript
- Vite 7 + Tailwind CSS 4
- React Router + TanStack React Query
- MediaRecorder API for audio capture
- Radix UI + Lucide React for components

**Backend:**
- Node.js + Fastify 5
- PostgreSQL 17 + pgvector extension
- Drizzle ORM for type-safe database access
- Google Gemini AI API integration
- Docker for development environment

**AI & ML:**
- Google Gemini 2.5 Flash (transcription)
- text-embedding-004 (semantic embeddings)
- Vector similarity search
- Natural language processing

## Development

Each component has its own development environment. See individual README files for detailed setup instructions:

- [Web Frontend](./web/README.md) - Audio recording interface and Q&A system
- [Server Backend](./server/README.md) - AI processing and vector database

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Client    │───▶│   Fastify API    │───▶│  Google Gemini  │
│ Audio Recording │    │ Audio Processing │    │ AI Transcription│
│ Q&A Interface   │    │ Vector Search    │    │   & Embeddings  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │   PostgreSQL     │
                       │   + pgvector     │
                       │ Vector Database  │
                       └──────────────────┘
```

## Use Cases

- **Educational Content**: Record lectures and ask questions about specific topics
- **Meeting Notes**: Transcribe meetings and query content later
- **Interview Analysis**: Record interviews and search for specific information
- **Content Creation**: Generate Q&A from recorded content automatically

## About

This is a study project focused on learning modern AI integration, vector databases, real-time audio processing, and building intelligent applications with semantic search capabilities.
