module.exports = {
  up: async (queryInterface, Sequelize) => {
    return;
    let tableName, constraintName;
    tableName = "integrations";
    constraintName = "integrations_authenticationId_fkey";
    await queryInterface.sequelize.query(
      `alter table "${tableName}" drop constraint "${constraintName}"`
    );
    await queryInterface.sequelize.query(`alter table "${tableName}"
        add constraint "${constraintName}" foreign key("authenticationId") references "authentications" ("id")
        on delete cascade`);
  },
  down: async (queryInterface, Sequelize) => {
    return;
    let tableName, constraintName;
    tableName = "integrations";
    constraintName = "integrations_authenticationId_fkey";
    await queryInterface.sequelize.query(
      `alter table "${tableName}" drop constraint "${constraintName}"`
    );
    await queryInterface.sequelize.query(`alter table "${tableName}"
        add constraint "${constraintName}" foreign key("authenticationId") references "authentications" ("id")
        on delete no action`);
  },
};
