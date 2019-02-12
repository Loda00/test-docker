FROM node:6
COPY . ./src/index.js
WORKDIR /src/index.js
RUN pwd
RUN npm install
CMD ["node", "./src/index.js"]
EXPOSE 3003

#  COPY index.js ./src/