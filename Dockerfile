FROM node:10

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY migrate-mongo-config.js /usr/src/app

RUN npm install && npm install -g migrate-mongo

COPY . /usr/src/app


EXPOSE 8080

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

#CMD ["npm", "start"]

CMD /wait && migrate-mongo up && npm run watch