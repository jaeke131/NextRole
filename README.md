# NextRole

NextRole is a React + Vite job application tracker with an Express API backend.

## Development

Run the backend API:

```bash
npm run dev:api
```

Run the frontend:

```bash
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:4000`.

## API Routes

- `GET /api/health`
- `GET /api/applications`
- `POST /api/applications`
- `GET /api/jobs/search?query=react&limit=10`

The jobs search route currently uses Remotive's public remote jobs API and normalizes the response before sending it to the frontend.
