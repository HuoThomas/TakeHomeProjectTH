# pull official base image
FROM bitnami/node

# set working directory
WORKDIR /usr/src/web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/web/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY . /usr/src/web/

# Expose port of web app
EXPOSE 3000

CMD [ "npm", "start" ]