FROM node:20.12-alpine

WORKDIR /usr/src/app

COPY . .

# TEST AND BUILD APPLICATION
# RUN npm ci
RUN npm install
RUN npx prisma migrate deploy
RUN npx prisma db seed
RUN npm run build

EXPOSE 53000

CMD ["npm", "start"]
#

HEALTHCHECK CMD curl -f http://localhost:3000/catalog-api/livenesscheck/ || exit 1
