FROM node:18 AS build

ARG APP_NAME

ENV APP=${APP_NAME}

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nx

RUN nx build $APP

FROM nginx:alpine 

ARG APP_NAME

ENV APP=${APP_NAME}

COPY --from=build /app/dist/apps/$APP /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


