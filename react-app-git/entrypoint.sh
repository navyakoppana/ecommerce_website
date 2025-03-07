#!/bin/sh

set -e

echo "Running Migrations"
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:status
npx sequelize-cli db:seed:all
echo "Finished Migrations"
npm run dev