import * as dotenv from "dotenv";
import * as schema from "@shared/schema";

// Load environment variables from .env file
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const dbUrl = process.env.DATABASE_URL;

// We support either a local SQLite file (sqlite://path) or a Postgres URL (postgres://...)
let _db: any;
let _pool: any = undefined;

if (dbUrl.startsWith("sqlite://")) {
  // SQLite (local development)
  const sqliteDbPath = dbUrl.replace("sqlite://", "");
  // lazy import to avoid optional deps when not used
  const Database = require("better-sqlite3").default;
  const { drizzle } = require("drizzle-orm/better-sqlite3");

  const sqlite = new Database(sqliteDbPath);
  _db = drizzle(sqlite, { schema });
  _pool = { end: () => {} };
} else {
  // Postgres (production) using node-postgres
  const { Pool } = require("pg");
  const { drizzle } = require("drizzle-orm/node-postgres");

  const pool = new Pool({ connectionString: dbUrl });
  _db = drizzle(pool, { schema });
  _pool = pool;
}

export const db = _db;
export const pool = _pool;
