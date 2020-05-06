import Sequelize from 'sequelize';
import sequelize from '../postgres';

const Model = Sequelize.Model;

export default class Users extends Model {
}

Users.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

