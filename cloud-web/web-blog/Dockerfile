FROM node:latest as builder
WORKDIR /app
COPY package.json
RUN npm install
COPY docker .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx
COPY --from=builder ./dist  /usr/share/nginx/html
