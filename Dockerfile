FROM mhart/alpine-node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /client && cp -a /tmp/node_modules /client

WORKDIR /client
ADD . /client

EXPOSE 3000

CMD ["npm", "start"]
