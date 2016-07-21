FROM mhart/alpine-node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /client && cp -a /tmp/node_modules /client

ADD . /client
WORKDIR /client

RUN npm run build


RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "dist/", "-a", "0.0.0.0", "-p", "3000"]
