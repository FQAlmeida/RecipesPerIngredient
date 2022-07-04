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
# ADD components/ components
RUN pnpm install

ADD apps/recipes-web-interface/ apps/recipes-web-interface
RUN pnpm install

CMD ["pnpm", "exec", "nx", "run", "recipes-web-interface:serve:development"]
