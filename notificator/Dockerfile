FROM node:14-alpine3.11

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

ENTRYPOINT ["node", "index.js"]