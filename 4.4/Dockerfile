FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY ./src/ ./src

EXPOSE 5678

CMD ["npm", "start"]