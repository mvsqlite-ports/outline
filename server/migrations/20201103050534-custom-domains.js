"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("teams", "domain", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addIndex("teams", ["domain"], {
      indicesType: 'UNIQUE',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teams", "domain");
  },
};
