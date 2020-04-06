import Sequelize from 'sequelize';
import sequelize from '../postgres';

const Model = Sequelize.Model;

export default class Model extends Model {
}

Model.init({
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

