import pg from 'pg';

export const db = new pg.Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'da_postgres',
});
