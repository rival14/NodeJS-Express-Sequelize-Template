import { Sequelize } from "sequelize";

const db = new Sequelize('rival_media', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;