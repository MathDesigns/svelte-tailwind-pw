FROM node:18-alpine AS builder
RUN sudo mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY ./src
RUN npm run build
EXPOSE 3000
CMD [ "node", "build/index.js" ]