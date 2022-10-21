FROM nginx:1.15.8-alpine

WORKDIR  /usr/share/nginx/html
COPY index.html .
COPY index.js .
COPY openapi-3.0 openapi-3.0
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN apk update
RUN apk add ca-certificates  && rm -rf /var/cache/apk/*
EXPOSE 80
