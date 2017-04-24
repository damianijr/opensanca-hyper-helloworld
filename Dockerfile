FROM nginx:alpine
MAINTAINER damianijr@gmail.com

COPY index.html /usr/share/nginx/html

EXPOSE 80
