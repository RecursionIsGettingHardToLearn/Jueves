# Etapa 1: construir la aplicación
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar e instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la app para producción
RUN npm run build

# Etapa 2: servir la aplicación optimizada
FROM node:18-alpine AS runner

WORKDIR /app

# Copiar archivos necesarios desde la etapa anterior
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Cloud Run espera que escuchemos en el puerto especificado por la variable de entorno $PORT
ENV PORT=8080
EXPOSE 8080

# Iniciar la aplicación Next.js en el puerto proporcionado
CMD ["npm", "start"]
