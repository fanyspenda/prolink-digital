FROM node:13.11.0-alpine

# pilih direktori untuk membuat image file
WORKDIR /usr/src/app

# mengkopi package
COPY package*.json ./

# menginstall dependencies
RUN npm install

# mengkopi seluruh file(kecuali yg ada di .dockerignore) ke WORKDIR
COPY . ./

# membuat build version dari nextjs
RUN npm run build

# listening ke port 3000
EXPOSE 3000

# menjalankan nextjs versi built
CMD ["npm", "start"]