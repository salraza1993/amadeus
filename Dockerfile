# STAGE 1: install
FROM node:lts-alpine AS base
WORKDIR /base
# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci #--omit=dev 
# Copy project 
COPY . .

# STAGE 2: build
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

# STAGE 3: app
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next/
COPY --from=build /build/public ./public/
COPY --from=build /build/node_modules ./node_modules/
COPY --from=build /build/next.config.mjs ./

#EXPOSE 80
#CMD ["npm", "start"]
#
#RUN npm run  build
#--no-server-side-rendering

# Install PM2 globally
RUN npm install pm2 -g

# Expose the port your Next.js app will run on
EXPOSE 3000

# Start the Next.js app using PM2
CMD ["pm2-runtime", "npm", "--", "start"]
