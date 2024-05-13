FROM node:22-alpine

WORKDIR /src/app

COPY package.json /

RUN npm install

COPY . /

RUN npm run build

EXPOSE 3001

CMD ["npm" , "start"]
