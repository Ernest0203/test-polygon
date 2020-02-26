import config from 'config';
import Sequelize from 'sequelize';
import pg from 'pg';

const DATABASE_URI = config.get('db.postgres.uri');
const OPTIONS = config.get('db.postgres.options');

export default new Sequelize(DATABASE_URI,  {
  logging: false,
  native: false,
  define: {
    underscored: true,
    underscoredAll: true
  }
});