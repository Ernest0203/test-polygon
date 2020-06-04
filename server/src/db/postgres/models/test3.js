import Sequelize from 'sequelize';
import sequelize from '../postgres';

const Model = Sequelize.Model;

export default class Test3 extends Model {
}

Test3.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

