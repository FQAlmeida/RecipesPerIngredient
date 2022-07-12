#! /bin/bash

pnpm exec nx run database-connection:migrate-prod

exec "$@"
