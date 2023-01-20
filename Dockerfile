FROM node:19

WORKDIR /rce-backend

RUN apt-get install python3 -y
RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*

RUN npm i --save-dev nodemon
COPY . .

RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dev"]