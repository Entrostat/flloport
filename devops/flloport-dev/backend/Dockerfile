FROM node:latest

EXPOSE 3000

COPY package.json .
RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]
CMD [ "start" ]