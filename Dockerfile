# =======================
# Stage 1: Builder
# =======================
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev) for build
RUN pnpm install --frozen-lockfile

# Copy all source code
COPY . .

# Build the app
RUN pnpm run build

# =======================
# Stage 2: Production
# =======================
FROM node:20-alpine

# Install pnpm in prod stage
RUN npm install -g pnpm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the built output from builder
COPY --from=builder /app/dist ./dist

# Optional: copy other files you need at runtime (e.g., .env)
# COPY .env ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start the app
CMD ["node", "--enable-source-maps", "dist/src/main.js"]
