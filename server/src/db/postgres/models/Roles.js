import Sequelize from 'sequelize';
import sequelize from '../postgres';
import Users from './index.js';

const Model = Sequelize.Model;

export default class Roles extends Model {
}

Roles.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  role: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    }
  },
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

