require('dotenv').config();
const { client } = require('./setup-db');

const {
  CREATE_AREAS_TABLE_QUERY,
  INSERT_AREAS_QUERY,
  CREATE_RESTAURANTS_TABLE_QUERY,
  INSERT_RESTAURANTS_TABLE_QUERY,
} = require('./sql-queries');

async function runQuery(query, name) {
  try {
    await client.query(query);
    console.log(`${name}: success`);
  } catch (error) {
    console.log(`${name}: error: ${error}`);
  }
}

const runQueries = async () => {
  await client.connect();
  await runQuery(CREATE_AREAS_TABLE_QUERY, 'CREATE_AREAS_TABLE_QUERY');
  await runQuery(INSERT_AREAS_QUERY, 'INSERT_AREAS_QUERY');
  await runQuery(
    CREATE_RESTAURANTS_TABLE_QUERY,
    'CREATE_RESTAURANTS_TABLE_QUERY'
  );
  await runQuery(
    INSERT_RESTAURANTS_TABLE_QUERY,
    'INSERT_RESTAURANTS_TABLE_QUERY'
  );
  await client.end();
};

runQueries();
