import database from "infra/database.js";
//import { Client } from "pg";

async function status(request, response) {
  const updatedAt = new Date().toISOString(); // Formato ISO 8601

  // const databaseVersionResulty = await database.query("SELECT version();");
  // const databaseVersionValuey = databaseVersionResulty.rows[0].version;

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsR = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsS =
    databaseMaxConnectionsR.rows[0].max_connections;

  console.log("Max Connections: " + databaseMaxConnectionsS);

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpnedConnectionsR = await database.query({
    text: "SELECT count(*)::int  FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpnedConnectionsS = databaseOpnedConnectionsR.rows[0].count;
  console.log("Opned Connections: " + databaseOpnedConnectionsS);
  //await database.end( );

  /* Meu teste por conta:
  
  const version = "SELECT version();";
  const queryVersion = await new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await queryVersion.connect();
  const result = await queryVersion.query(version);
  await queryVersion.end();*/

  response.status(200).json({
    updated_at: updatedAt, // Em Json a convenção diz que tem que ser em snake_case
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsS),
        opned_connections: parseInt(databaseOpnedConnectionsS),
      },
    },
  });
}

export default status;
