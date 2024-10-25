# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src

# Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Install TypeScript globally and compile the TypeScript code to JavaScript
RUN npm install -g typescript
RUN tsc

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (optional)
# ENV MONGO_URL=mongodb://mongo:27017/mydb

# Run the app
CMD ["npm", "start"]
