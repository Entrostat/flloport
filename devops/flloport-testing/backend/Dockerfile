FROM node:10.7

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]