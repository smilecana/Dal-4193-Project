# Dockerfile for Node Express Backend

FROM node:16 as build-stage

# Create App directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

#EXPORTS
EXPOSE 5000

CMD ["npm", "start"]