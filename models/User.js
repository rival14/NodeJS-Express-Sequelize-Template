import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  balance: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 0,
  },
  user_type: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 1, // 0 = Admin, 1 = User, 2 = Reseller
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},{
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  paranoid: true,
});

export default User;