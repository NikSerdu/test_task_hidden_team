FROM node as development

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:stable-alpine as production


RUN apk add --no-cache gettext


COPY nginx.conf.template /etc/nginx/templates/default.conf.template


COPY --from=development /usr/src/app/dist /usr/share/nginx/html


CMD envsubst '$VITE_SERVER_URL' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
