import Sequelize from 'sequelize';

const sequelize = new Sequelize('vuoaftsg', 'vuoaftsg', '07lApfa01vMuacWqw8Q3a4MU45aHq4jO', {
  host: 'baasu.db.elephantsql.com',
  port: 5432,
  dialect: 'postgres',
  underscored: true,
});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;