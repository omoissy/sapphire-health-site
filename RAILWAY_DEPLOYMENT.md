# Railway Deployment Guide

This guide explains how to deploy the Sapphire Health site to Railway.

## Required Environment Variables

### Essential Variables (Required)

1. **DATABASE_URL** (Required)
   - Your PostgreSQL database connection string
   - Example: `postgresql://user:password@host:port/database?sslmode=require`
   - You can use Railway's PostgreSQL service or connect to an external database (like Neon)

2. **SESSION_SECRET** (Recommended for Production)
   - A secure random string for session encryption
   - Generate a strong secret: `openssl rand -base64 32`
   - If not set, a default will be used (insecure for production!)

### Optional Variables (For Replit Authentication)

If you want to use Replit authentication (only needed if deploying from Replit):

3. **REPL_ID** (Optional)
   - Your Replit project ID
   - Only needed if you want Replit OIDC authentication
   - If not set, authentication endpoints will return 501 (Not Implemented)
   - The app will still work for public endpoints (booking, contact forms, etc.)

4. **ISSUER_URL** (Optional)
   - OIDC issuer URL (defaults to `https://replit.com/oidc`)
   - Only needed if using Replit auth

### Port Configuration

Railway automatically sets the `PORT` environment variable. The app will use it automatically.

## Setting Environment Variables in Railway

1. Go to your Railway project dashboard
2. Select your service
3. Click on the "Variables" tab
4. Add each environment variable:
   - Click "New Variable"
   - Enter the variable name (e.g., `DATABASE_URL`)
   - Enter the value
   - Click "Add"

## Deployment Steps

1. **Connect Railway to GitHub**
   - In Railway, click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

2. **Add Environment Variables**
   - Add `DATABASE_URL` (required)
   - Add `SESSION_SECRET` (recommended)
   - Optionally add `REPL_ID` if using Replit auth

3. **Create/Update Database Tables**
   - Run Drizzle against the same Neon connection string used by Railway:

```bash
DATABASE_URL="your-neon-database-url" npm run db:push
```

   - Equivalent direct command:

```bash
DATABASE_URL="your-neon-database-url" npx drizzle-kit push --config=drizzle.config.ts
```

4. **Deploy**
   - Railway will automatically build and deploy
   - The build command is: `npm run build`
   - The start command is: `npm start`

## Notes

- **Authentication**: If `REPL_ID` is not set, the app will skip Replit OIDC setup. Public endpoints (booking, contact forms) will work fine. Staff dashboard endpoints will require authentication, which won't work without Replit auth configured.

- **Database**: Make sure your database is accessible from Railway. If using Neon, ensure your connection string includes `?sslmode=require`.
- **Schema Push**: The app expects the Drizzle tables to exist before startup seed data runs. `npm run db:push` creates tables such as `health_alerts` and `environmental_data` from `shared/schema.ts`.

- **Build**: The app uses `esbuild` to bundle the server code. Make sure all dependencies are listed in `package.json`.

## Troubleshooting

### Error: "clientId must be a non-empty string"
- This means `REPL_ID` is not set. This is OK if you don't need Replit authentication.
- The app will still work for public endpoints.

### Error: "DATABASE_URL must be set"
- Make sure you've added the `DATABASE_URL` environment variable in Railway.

### Error: "listen ENOTSUP"
- This was fixed in the code. Make sure you're using the latest version.

## Testing Locally

To test with the same configuration as Railway:

```bash
DATABASE_URL="your-database-url" \
SESSION_SECRET="your-secret" \
npm run dev
```

The app will work without `REPL_ID` for public endpoints.
