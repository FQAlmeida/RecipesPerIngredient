#! /bin/bash

pnpm generate
pnpm migrate:prod

exec "$@"
