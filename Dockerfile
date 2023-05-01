FROM node:18 AS builder

WORKDIR /builder

COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build
RUN ls -a

FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./

EXPOSE 3000
CMD ["node", "server.js"]
