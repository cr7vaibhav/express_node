# AI Coding Agent Instructions

## Project Overview
This is a minimal Express.js Node.js application. The project serves as a foundation for building REST APIs and server applications using Express. Currently at bootstrap stage with Express dependency installed but routes/middleware not yet implemented.

## Architecture & Setup

### Key Entry Point
- **[server.js](../server.js)** - Application entry point; currently initializes Express instance but lacks configuration, middleware, or route handlers. Expand here with:
  - Middleware setup (body parsing, CORS, logging)
  - Route definitions
  - Error handling
  - Server listening initialization

### Project Configuration
- **[package.json](../package.json)** - Main dependency: Express 5.2.1 (latest)
- **Entry point**: `main: index.js` (note: actual server is `server.js` - align these or add exports wrapper)
- **Type**: CommonJS modules (using `require()`)

## Development Workflow

### Installation & Running
```bash
npm install           # Install dependencies (Express already added)
npm start            # No start script defined - add: "start": "node server.js"
npm test             # No tests configured - add test script as needed
```

### Recommended Enhancements
1. Add `start` script to package.json for easy server launch
2. Add PORT environment variable handling (e.g., `process.env.PORT || 3000`)
3. Add `.gitignore` with `node_modules/`, `.env`, common OS files
4. Add development server (nodemon) for local development

## Conventions & Patterns

### Express Setup Pattern
When expanding routes/middleware in server.js, follow this structure:
```javascript
// 1. Middleware (body parsers, CORS, logging)
app.use(express.json())

// 2. Route handlers
app.get('/', (req, res) => { ... })

// 3. Error handling
app.use((err, req, res, next) => { ... })

// 4. Server initialization
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
```

### CommonJS Standard
- Use `require()` for imports, `module.exports` for exports
- Avoid mixing CommonJS and ES modules

## Critical Notes for AI Agents

- **Incomplete State**: This is bootstrap code; most application logic needs to be implemented
- **Missing: Route handlers, middleware, error handling, environment configuration**
- **Type**: CommonJS only - do not introduce ES modules (import/export) without explicit requirement
- **Dependencies**: Only Express 5.2.1 as runtime dependency; add dev dependencies (nodemon, testing frameworks) as needed
- **No external services yet**: Plan database/API integrations in dedicated middleware/route layers

---
*Last updated: January 2026*
