FROM node:12

WORKDIR /app

COPY . .
RUN npm install

CMD PORT=$PORT node index.js