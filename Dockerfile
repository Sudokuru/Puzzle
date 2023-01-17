FROM node:14
WORKDIR .
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000