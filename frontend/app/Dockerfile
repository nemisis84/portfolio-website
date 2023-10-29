# Use an official Node.js runtime as the base image
FROM node:20.9.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies in the container
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Specify the command to run on container start
CMD ["npm", "start"]
