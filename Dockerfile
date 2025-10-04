# ---- Etapa de Construcción (Build Stage) ----
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm test
# ---- Etapa de Producción (Production Stage) ----
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/src/app .
EXPOSE 3000
CMD [ "node", "app.js" ]
