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

FROM node:18
RUN npm install -g pnpm

WORKDIR /app

COPY --from=0 /app/dist/apps/recipes-web-interface/ ./apps/
COPY --from=0 /app/dist/libraries/ ./libraries/
RUN pnpm install

CMD ["pnpm", "start"]  
