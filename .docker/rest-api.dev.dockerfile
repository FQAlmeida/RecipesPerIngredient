FROM node:18

WORKDIR app

ADD pnpm-workspace.yaml .
ADD package.json .

RUN pnpm install

ADD libraries/ libraries
ADD apps/recipes-rest/ apps/recipes-rest 

RUN pnpm install

CMD ["pnpm", "dev"]
