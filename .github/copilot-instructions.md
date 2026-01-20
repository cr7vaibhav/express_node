# AI Coding Agent Instructions

## Project Overview
Express.js REST API server with CORS enabled. Currently implements basic product listing routes and serves frontend from localhost:5500. A working foundation for expanding API functionality and database integration.

## Architecture & Setup

### Key Entry Point
- **[server.js](../server.js)** - Main application server
  - CORS middleware configured for localhost:5500 (Live Server port)
  - Routes: `GET /`, `/about`, `/contact`, `/products`, `/products/:id`, `/message`
  - Listens on port 3000
  - Uses hardcoded product data (ready for database migration)

### Project Structure
- **[package.json](../package.json)** - Express 5.2.1 + CORS 2.8.5; missing `"start"` script
- **[index.html](../index.html)** - Frontend file (served by Live Server on port 5500)
- **Type**: CommonJS modules (`require()`/`module.exports`)

## Current Patterns & Data Flow

### Route Pattern
Routes return either plain text (`res.send()`) or JSON (`res.json()`):
```javascript
app.get('/products', (req, res) => {
  res.json([
    {id:1, name: 'laptop', price: 1299},
    {id:2, name: 'mouse', price: 50}
  ])
})

// Dynamic routes use URL parameters
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id)
  // Search products array and return matching item
})
```

### CORS Configuration
Whitelist is hardcoded for development:
```javascript
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))
```

## Critical Implementation Notes

- **No start script** - Add `"start": "node server.js"` to package.json scripts
- **Port hardcoded** - Add `const PORT = process.env.PORT || 3000` and replace `3000`
- **No error handling** - Consider adding try-catch in route handlers for robustness
- **Static data** - Products are hardcoded arrays; next step is database (MongoDB/PostgreSQL) integration
- **No body parsing middleware** - If adding POST/PUT routes, add `app.use(express.json())`
- **CommonJS only** - Do not introduce ES6 imports/exports without explicit requirement

## Next Steps for Expansion
1. Add POST/PUT/DELETE routes for product management
2. Migrate hardcoded products to database with query middleware
3. Add request validation and error handling middleware
4. Extract routes into separate files (routes/products.js pattern)
5. Add environment variables (.env support with dotenv package)

---
*Last updated: January 20, 2026*
