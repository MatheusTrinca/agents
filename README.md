# Agents Project

A full-stack study project featuring a modern web application with real-time capabilities, built with React and Node.js.

## Project Structure

This monorepo contains two main components:

- **`web/`** - React frontend application with modern UI components
- **`server/`** - Node.js backend API with PostgreSQL database

## Quick Start

### Prerequisites
- Node.js (latest stable version)
- Docker and Docker Compose
- npm or yarn

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

## Features

- Room management system
- Question handling interface
- Real-time interactions
- Modern React UI with Tailwind CSS
- Type-safe APIs with TypeScript
- PostgreSQL database with Drizzle ORM

## Technology Stack

**Frontend:**
- React 19 + TypeScript
- Vite + Tailwind CSS
- React Router + TanStack Query

**Backend:**
- Node.js + Fastify
- PostgreSQL + Drizzle ORM
- Docker for development

## Development

Each component has its own development environment. See individual README files for detailed setup instructions:

- [Web Frontend](./web/README.md)
- [Server Backend](./server/README.md)

## About

This is a study project focused on learning modern full-stack development patterns, real-time applications, and scalable architecture design.
