module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("apiKeys", {
      id: {
        type: "UUID",
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: "CHARACTER VARYING",
        allowNull: true,
      },
      secret: {
        type: "CHARACTER VARYING",
        allowNull: false,
        unique: true,
      },
      userId: {
        type: "UUID",
        allowNull: true,
      },
      createdAt: {
        type: "DATETIME",
        allowNull: false,
      },
      updatedAt: {
        type: "DATETIME",
        allowNull: false,
      },
      deletedAt: {
        type: "DATETIME",
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("apiKeys");
  },
};
