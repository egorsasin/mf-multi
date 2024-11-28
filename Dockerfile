FROM node:18

ARG APP_NAME

ENV APP=${APP_NAME}

WORKDIR /app

COPY . .

RUN npm ci --legacy-peer-deps

RUN npm install -g nx

RUN nx build $APP
  
CMD nx serve $APP --host 0.0.0.0


