FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY tsconfig.json ./
RUN node_modules/.bin/tsc
EXPOSE 3000
CMD [ "node", "./dist/index.js" ]