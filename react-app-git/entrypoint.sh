#!/bin/sh

set -e

echo "Installing dependencies..."
#npm install
npm install pg pg-hstore sequelize@5.22.5 sequelize-cli@5.5.1
echo "Finished installing dependencies"

echo "Running Migrations..."
npx sequelize-cli db:migrate --debug
echo "Migration Status:"
npx sequelize-cli db:migrate:status
echo "Seeding DB"
# npx sequelize-cli db:seed:all
echo "Finished Migrations"
npm run dev
