FROM bitnami/node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN cd /usr/src/app; npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "run", "dev" ]