# versión del NODE
FROM node:12.18.2

#ENV APP_ROOT /src
RUN mkdir -p /usr/src/nodeapp

WORKDIR /usr/src/nodeapp

COPY ["package.json", "yarn.lock", "/usr/src/nodeapp/"]

#ADD . ${APP_ROOT}

RUN yarn

COPY [".", "/usr/src/nodeapp/"]

RUN yarn build

ENV HOST 0.0.0.0

EXPOSE 3000

CMD [ "yarn", "start" ]

