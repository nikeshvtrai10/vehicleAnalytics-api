'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Streams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      deviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Devices",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cameraId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      streamUrl: {
        type: Sequelize.STRING
      },
      modelName: {
        type: Sequelize.STRING
      },
      imageSize: {
        type: Sequelize.STRING
      },
      detectionThreshold: {
        type: Sequelize.FLOAT
      },
      minSize: {
        type: Sequelize.STRING
      },
      maxSize: {
        type: Sequelize.STRING
      },
      tilt: {
        type: Sequelize.FLOAT
      },
      minThreshold: {
        type: Sequelize.INTEGER
      },
      maxThreshold: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Streams');
  }
};