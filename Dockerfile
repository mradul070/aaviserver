FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

COPY .env .

CMD ["node", "dist/main.js"]
