import { Drizzle } from "drizzle-orm";
import { sqlite3 } from "sqlite3";

const db = new Drizzle({
  client: new sqlite3.Database(":memory:"),
});

export default db;
