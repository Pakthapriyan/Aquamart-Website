# AquaMart

AquaMart is a simple MERN-stack web application currently implementing user login and signup functionality using a Node.js/Express backend and MongoDB.

---

## Features

* User registration (signup)
* User login with JWT authentication
* Secure password hashing (bcrypt)
* Basic user model
* Backend API for auth only

---

## Tech Stack Tech Stack

* **Frontend**: React + Vite or CRA, React Router, Axios
* **Backend**: Node.js, Express, Mongoose, JWT, bcrypt
* **Database**: MongoDB Atlas (recommended) or self‑hosted MongoDB
* **Cloud**:
* **Testing**: Jest + React Testing Library (web), Supertest (API)
* **Lint/Format**: ESLint, Prettier

---

## Monorepo Layout Monorepo Layout

```
/aquamart
  ├─ /frontend           # React app
  │   ├─ src/
  │   ├─ .env            # VITE_* or REACT_APP_* client env
  │   └─ package.json
  ├─ /backend            # Node/Express API
  │   ├─ src/
  │   │   ├─ server.js   # Express bootstrap
  │   │   ├─ routes/
  │   │   ├─ controllers/
  │   │   ├─ models/
  │   │   └─ middleware/
  │   ├─ .env            # server secrets (.gitignored)
  │   └─ package.json
  ├─ package.json        # optional workspace root
  ├─ README.md
  └─ .gitignore
```

> **Note (Windows)**: If `touch` isn’t available, create files with PowerShell: `ni .env` or `New-Item -Name .env -ItemType File`.

---

## Environment Variables Environment Variables

### Backend (`/backend/.env`)

```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxxx.mongodb.net/aquamart
JWT_SECRET=super_secret_change_me
CLIENT_URL=http://localhost:3000
# Optional 




# Optional payments
STRIPE_SECRET_KEY=sk_test_xxx
```

### Frontend (`/frontend/.env`)

> Use `VITE_` prefix (for Vite) or `REACT_APP_` (for CRA); only these are exposed in the browser.

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

---

## Quick Start (Local) Quick Start (Local)

### 1) Clone & install

```bash
# clone
git clone https://github.com/<your-username>/aquamart.git
cd aquamart

# install deps
cd backend && npm i && cd ..
cd frontend && npm i && cd ..
```

### 2) Configure env files

Create `/backend/.env` and `/frontend/.env` using templates above.

### 3) Run dev servers

```bash
# terminal A (API)
cd backend
npm run dev   # nodemon, listens on 5000

# terminal B (Web)
cd frontend
npm run dev   # Vite, opens on 3000
```

> If using CRA, `npm start` for frontend. Configure a proxy (`/frontend/package.json`):

```json
{
  "proxy": "http://localhost:5000"
}
```

---

## Scripts Scripts

### Backend `package.json`

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

### Frontend `package.json` (Vite)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint ."
  }
}
```

---

## API Overview

Base URL: `/api`

* `POST /auth/register` — create user account
* `POST /auth/login` — login, returns JWT

(Only authentication endpoints are implemented currently.)

---

## MongoDB Models (summary) MongoDB Models (summary)

* **User**: name, email, passwordHash, role, createdAt
* **Product**: name, slug, description, price, images[], category, stock, rating
* **Order**: userId, items[], amount, status, payment, shipping

---

## Deployment

For now, the project runs locally. Backend (Node/Express) and frontend (React) can be started with their respective development servers. Cloud deployment will be added later.

---

## CI/CD (Optional) CI/CD (Optional)

* **Frontend**: handled by  on each push to the selected branch.
* **Backend**: GitHub Actions → deploy to .

`.github/workflows/deploy-backend.yml` (snippet):

```yaml
name: Deploy Backend
on:
  push:
    paths:
      - 'backend/**'
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: cd backend && npm ci && npm run build || echo "no build step"
      - uses: einaregilsson/beanstalk-deploy@v22
        with:
          application_name: AquaMart
          environment_name: aquamart-prod
          region: ap-south-1
          version_label: ${{ github.sha }}
          deployment_package: backend.zip
```

---

## Configuration & Tips Configuration & Tips

* **CORS**: In Express, allow `CLIENT_URL` and credentials.
* **Proxy (dev)**: Vite proxy or CRA `proxy` for API calls.
* **Pagination**: Use `limit`, `skip` in Mongo queries; index fields (`name`, `category`).
* **Security**: Helmet, rate‑limit, input validation (zod/joi), never log secrets.
* **Secrets**: Use
* **Logs**: Use CloudWatch Logs for backend; enable ALB access logs.

---

## 🧰 Troubleshooting

* **PowerShell: `touch` not found** → use `ni .env`.
* **Mongo connection fails** → whitelist IP in MongoDB Atlas or enable `0.0.0.0/0` temporarily (not for prod).
* **CORS errors** → set correct `CLIENT_URL` and enable CORS middleware.
* ** 404 on refresh** → add SPA rewrite rule (see above).
* **EB health check red** → ensure `/health` route returns 200 and correct port is exposed.

---

## Scripts Sample Seed Script (optional)

Add `/backend/src/scripts/seed.js` to insert demo products, run with `node src/scripts/seed.js`.

---

## 🧯 Health Check Route (backend)

```js
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, uptime: process.uptime() });
});
```

---

## 📜 License

MIT — feel free to use and modify.

---

## FAQ FAQ

**Do I need MongoDB Atlas?**  Recommended. If not, run local MongoDB and set `MONGO_URI=mongodb://localhost:27017/aquamart`.

**Where do I put `server.js`?**  `/backend/src/server.js`. The `start` script should point to it.

**I don’t have Stripe yet.**  Keep the mock checkout and hide the Stripe button until keys exist.

**Can I deploy the backend on EC2 directly?**  Yes, but EB/ECS reduces ops overhead.
