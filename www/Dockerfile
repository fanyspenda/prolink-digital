FROM node:13.11.0-alpine

# pilih direktori untuk membuat image file
WORKDIR /usr/src/app

# mengkopi package
COPY package*.json ./

# menginstall dependencies
RUN npm install

COPY . ./
RUN npm run build

CMD ["npm", "start"]