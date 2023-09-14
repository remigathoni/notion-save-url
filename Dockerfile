FROM node:14-slim

WORKDIR /app
COPY package*.json /app

RUN npm ci --only=production && npm cache clean --force
COPY . /app

CMD [ "node", "app.js"]

EXPOSE 3000