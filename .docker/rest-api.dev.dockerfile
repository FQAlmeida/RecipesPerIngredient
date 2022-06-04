FROM node:18

RUN npm install -g pnpm

WORKDIR /app

ADD pnpm-workspace.yaml .
ADD package.json .
ADD .npmrc .

RUN pnpm install

ADD libraries/ libraries
ADD apps/recipes-rest/ apps/recipes-rest 

RUN pnpm install

CMD ["pnpm", "-r", "dev"]
