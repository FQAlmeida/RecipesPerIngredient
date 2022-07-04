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

# WORKDIR /app/apps/recipes-persistence-rest-api/
RUN chmod +x /app/apps/recipes-persistence-rest-api/scripts/exec_migrate.sh
ENTRYPOINT ["/app/apps/recipes-persistence-rest-api/scripts/exec_migrate.sh"]

WORKDIR /app
RUN ["pnpm", "exec", "nx", "run", "database-connection:gen-client"]

CMD ["pnpm", "exec", "nx", "run", "recipes-persistence-rest-api:serve"]
# CMD ["ls", "-a", "apps/recipes-persistence-rest-api/"]
