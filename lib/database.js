import { createPool } from "mysql2/promise";

const globalForMysql = globalThis;

const pool =
  globalForMysql.travelExpertsPool ??
  createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "cprg210user",
    database: process.env.DB_NAME || "travelexperts",
    port: Number(process.env.DB_PORT) || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000,
    dateStrings: true,
  });

if (process.env.NODE_ENV !== "production") {
  globalForMysql.travelExpertsPool = pool;
}

export default pool;