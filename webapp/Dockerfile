# pull official base image
FROM bitnami/node

# set working directory
WORKDIR /usr/src/web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/web/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

# add app
COPY . /usr/src/web/

# Expose port of web app
EXPOSE 3000

CMD [ "yarn", "start" ]