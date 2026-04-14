FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

FROM nginx:alpine-slim AS runtime

# Usuario no-root ya viene configurado en nginx:alpine-slim (nginx uid=101)
COPY --from=builder /app/dist /usr/share/nginx/html

# Config hardened de nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]