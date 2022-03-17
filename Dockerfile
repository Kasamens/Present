FROM ubuntu:latest AS development

ENV NODE_ENV development

WORKDIR /app

RUN apt-get update
RUN apt-get install nodejs npm -y

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5125

CMD ["npm", "start"]