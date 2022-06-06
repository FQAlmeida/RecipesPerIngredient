FROM node:18

RUN apt-get update && apt-get install wait-for-it

RUN npm install -g pnpm

WORKDIR /app

ADD pnpm-workspace.yaml .
ADD package.json .
ADD .npmrc .

RUN pnpm install

ADD libraries/ libraries
RUN pnpm install

ADD apps/recipes-rest/ apps/recipes-rest 
RUN pnpm install

WORKDIR /app/apps/recipes-rest/
RUN chmod +x scripts/exec_migrate.sh
ENTRYPOINT ["scripts/exec_migrate.sh"]

CMD ["pnpm", "dev"]
