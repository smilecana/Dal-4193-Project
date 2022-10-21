# Dockerfile for React Client
#Build react client
FROM node:16 as build-stage

# Working directory be app
WORKDIR /usr/src/app

#Copies the package.json file into "/server" and runs npm i
COPY package.json ./

### Installing dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
