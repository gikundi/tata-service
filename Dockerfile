# Use an official Node.js runtime as the base image
FROM node:19-alpine

# Create a directory to hold your application code inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Start your application when the container starts
CMD [ "node", "app.js" ]
