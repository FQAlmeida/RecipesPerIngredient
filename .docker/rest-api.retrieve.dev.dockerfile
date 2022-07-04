FROM node:18

RUN npm install -g pnpm

WORKDIR /app

ADD pnpm-workspace.yaml .
ADD package.json .
ADD tsconfig.base.json .
ADD workspace.json .
ADD nx.json .
ADD .npmrc .

RUN pnpm install

ADD libraries/ libraries
RUN pnpm install

ADD apps/recipes-retrieve-rest-api/ apps/recipes-retrieve-rest-api 
RUN pnpm install

CMD ["pnpm", "exec", "nx", "run", "recipes-retrieve-rest-api:serve"]
