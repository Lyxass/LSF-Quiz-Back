# Image de base
FROM node:14.18-buster

ADD . /app/
WORKDIR /app/

RUN npm install

EXPOSE PORT/tcp

CMD npm run dev
