FROM node:18 AS builder

WORKDIR /builder

COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:18-slim

WORKDIR /app

COPY --from=builder /builder/next.config.js ./
COPY --from=builder /builder/public ./public
COPY --from=builder /builder/.next/standalone ./
COPY --from=builder /builder/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
