FROM node:lts-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./package.json ./package.json
COPY . .

# ENV NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://admin.nsas-tourism.com/graphql
# ENV NEXT_PUBLIC_WORDPRESS_WP_JSON_URL=https://admin.nsas-tourism.com/wp-json/

RUN npm install --include=dev
# RUN npm run build

CMD ["npm", "run" , "dev"]