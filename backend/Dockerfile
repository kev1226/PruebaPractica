FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "src/index.js"]
# Use the official Node.js image as the base image
# Set the working directory inside the container