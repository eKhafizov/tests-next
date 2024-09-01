import { sql } from '@vercel/postgres';


export async function seedUsers() {
   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
}


export default async function GET(request?: Request) {
  const res = await fetch('https://dummyjson.com/products');
  const json = await res.json();
  seedUsers();
  console.log(json);
  return json;
}