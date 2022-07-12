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

ADD apps/ apps 
RUN pnpm install

RUN ["pnpm", "nx", "run-many", "--target=build", "--configuration=production", "--all"]

FROM node:18

RUN npm install -g pnpm
WORKDIR /app

COPY --from=0 /app/dist/apps/recipes-retrieve-rest-api/ ./app/
COPY --from=0 /app/dist/libraries/ ./libraries/

WORKDIR /app/app
COPY --from=0 /app/.npmrc .
RUN pnpm install

CMD ["node", "./main.js"]  
