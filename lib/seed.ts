import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS staff (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      count INT NOT NULL DEFAULT 0
    );
    `

  console.log(`Created "staff" table`)

  const staff = await Promise.all([
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Aaron', 0);
      `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Joel', 0);
      `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Joe', 0);
      `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Joey', 0);
    `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Josh', 0);
    `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Madeleine', 0);
    `,
    sql`
      INSERT INTO staff (name, count)
      VALUES ('Ed', 0);
    `,
  ])

  console.log(`Seeded ${staff.length} staff`)

  return {
    createTable,
    staff,
  }
}
