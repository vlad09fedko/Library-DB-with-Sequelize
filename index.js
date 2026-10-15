const db = require('./src/db/models');

const dbCheck = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      `Connection with DB ${process.env.DB_NAME} has been successfuly done!`,
    );
  } catch (error) {
    console.error('Cannot connect to DB:', error.message);
  }
};
dbCheck();

const dropGenresTable = async () => {
  try {
    await db.Genres.drop();
    console.log(`Table Genres has been successfuly dropped.`);
  } catch (error) {
    console.error(`Cannot drop table Genres:`, error.message);
  }
};
dropGenresTable()

const syncGenresTable = async () => {
  try {
    await db.Genres.sync({ alter: true });
    console.log(`Table Genres has been successfuly synchronized.`);
  } catch (error) {
    console.error(`Cannot sync table Genres:`, error.message);
  }
};
syncGenresTable()
