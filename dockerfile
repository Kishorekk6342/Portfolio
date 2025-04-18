# Step 1: Build the React app with Vite
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
