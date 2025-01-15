# Dockerfile
# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Add build arguments
ARG VITE_KEY_AI
# Tambahkan ARG untuk environment variables lainnya

# Set environment variables
ENV VITE_KEY_AI=$VITE_KEY_AI
# Tambahkan ENV untuk environment variables lainnya

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]