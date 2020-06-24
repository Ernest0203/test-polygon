'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Test1', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "deleted_at"
      }
    })
    .then(() => queryInterface.createTable('Test2', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "deleted_at"
      }
    }))
    .then(() => queryInterface.createTable('Test3', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "deleted_at"
      }
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Test1')
      .then(() => queryInterface.dropTable('Test2'))
      .then(() => queryInterface.dropTable('Test3'))
  }
};
