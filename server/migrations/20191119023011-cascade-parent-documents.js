const tableName = "documents";
// because of this issue in Sequelize the foreign key constraint may be named differently depending
// on when the previous migrations were ran https://github.com/sequelize/sequelize/pull/9890

const constraintNames = [
  "documents_parentDocumentId_fkey",
  "parentDocumentId_foreign_idx",
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return;
    let error;

    for (const constraintName of constraintNames) {
      try {
        await queryInterface.sequelize.query(
          `alter table "${tableName}" drop constraint "${constraintName}"`
        );
        await queryInterface.sequelize.query(`alter table "${tableName}"
            add constraint "${constraintName}" foreign key("parentDocumentId") references "documents" ("id")
            on delete cascade`);
        return;
      } catch (err) {
        error = err;
      }
    }

    throw error;
  },
  down: async (queryInterface, Sequelize) => {
    return;
    let error;

    for (const constraintName of constraintNames) {
      try {
        await queryInterface.sequelize.query(
          `alter table "${tableName}" drop constraint "${constraintName}"`
        );
        await queryInterface.sequelize.query(`alter table "${tableName}"\
            add constraint "${constraintName}" foreign key("parentDocumentId") references "documents" ("id")
            on delete no action`);
        return;
      } catch (err) {
        error = err;
      }
    }

    throw error;
  },
};
