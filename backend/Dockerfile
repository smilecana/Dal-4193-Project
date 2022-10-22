# Dockerfile for Node Express Backend

FROM node:16 as build-stage

# Create App directory
WORKDIR /backend

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#EXPORTS
EXPOSE 5000

CMD ["npm", "start"]