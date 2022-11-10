FROM node:16

WORKDIR /app

COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
