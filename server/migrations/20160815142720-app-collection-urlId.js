module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("atlases", "urlId", {
      type: Sequelize.STRING,
    });
    await queryInterface.addIndex("atlases", ["urlId"], {
      indicesType: 'UNIQUE',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("atlases", "urlId");
  },
};
