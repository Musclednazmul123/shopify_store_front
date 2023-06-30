FROM node:16-alpine
ARG NEXT_PUBLIC_STORE_API
ENV NEXT_PUBLIC_STORE_API $NEXT_PUBLIC_STORE_API
WORKDIR /user/src/nextapp
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]