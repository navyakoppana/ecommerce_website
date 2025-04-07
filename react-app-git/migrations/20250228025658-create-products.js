'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      _id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.NUMERIC
      },
      image: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      category: {
        type: Sequelize.STRING
      },
      subCategory: {
        type: Sequelize.STRING
      },
      sizes: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      bestseller: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
