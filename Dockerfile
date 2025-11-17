FROM node:lts-alpine3.22 AS build


WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile
RUN npm install -g dotenv-cli
COPY . .

# Set fake env var required for prisma generate
ENV DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public"
RUN pnpm run build 
RUN npx prisma generate

# --- STAGE 2: PRODUCTION ---
FROM node:lts-alpine3.22 AS production

WORKDIR /app

COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main.js"]