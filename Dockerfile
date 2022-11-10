FROM node:16 AS build

WORKDIR /build

COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:16

WORKDIR app

COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/.next ./next
COPY --from=build /build/public ./public
COPY package.json yarn.lock next.config.js .

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
