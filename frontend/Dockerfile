FROM node:16-alpine
WORKDIR /user/src/nextapp
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]