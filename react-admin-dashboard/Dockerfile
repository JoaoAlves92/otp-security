FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT ["npm", "run", "start"]