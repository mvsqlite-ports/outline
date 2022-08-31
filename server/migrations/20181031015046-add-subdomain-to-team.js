module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("teams", "subdomain", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addIndex("teams", ["subdomain"], {
      indicesType: 'UNIQUE',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teams", "subdomain");
    await queryInterface.removeIndex("teams", ["subdomain"]);
  },
};
