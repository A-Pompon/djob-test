FROM node:18-alpine As development

WORKDIR /usr/src/app

# If I don't install nest's cli the app won't start telling me nest was not found.
RUN npm install -g @nestjs/cli 

COPY package.json package-lock.json .

# Install all dependencies
RUN npm install

# package.json start script
CMD [ "npm", "run", "start:dev"]