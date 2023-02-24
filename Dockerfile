FROM node:16
WORKDIR .
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000