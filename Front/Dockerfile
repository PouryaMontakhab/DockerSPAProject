# base image
FROM node:latest

# set working directory
WORKDIR /frontapp
# install and cache app dependencies
COPY package.json /frontapp/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /frontapp

# start app
CMD ng serve --host 0.0.0.0