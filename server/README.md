# Server Backend

This is the backend API for the Agents project - a study project built with modern Node.js technologies.

## Technologies Used

### Core Framework
- **Node.js** - JavaScript runtime with experimental TypeScript support
- **Fastify 5.4.0** - Fast and low overhead web framework
- **TypeScript** - Type-safe JavaScript development

### Database & ORM
- **PostgreSQL** - Relational database with pgvector extension
- **Drizzle ORM** - Type-safe SQL ORM for TypeScript
- **Docker** - Containerized database setup

### Validation & Types
- **Zod** - TypeScript-first schema validation
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
The server provides REST API endpoints for:
- Room management
- Question handling
- Real-time features

## Project Structure
```
src/
├── db/
│   ├── connection.ts    # Database connection
│   ├── migrations/      # Database migrations
│   ├── schema/         # Database schema definitions
│   └── seed.ts         # Database seeding
├── http/
│   └── routes/         # API route handlers
├── server.ts           # Main server file
└── env.ts             # Environment configuration
```

## Development Notes
- Uses Node.js experimental TypeScript support (`--experimental-strip-types`)
- Environment variables loaded from `.env` file
- Hot reload enabled in development mode with `--watch`

## About
This is a study project focused on learning modern Node.js backend development, database design with PostgreSQL, and building scalable API architectures.