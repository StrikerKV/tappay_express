import pool from "../config/db";

interface User {
  id?: number;
  name: string;
  email: string;
}

export const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    );
  `;
  await pool.query(query);
};

export class UserModel {
  static async getConn(){
   try {
       const client = await pool.connect();
       const result = await client.query('SELECT NOW()'); // Simple query to check connection
       client.release(); // Release the client back to the pool
       return { message: 'Database connection successful', time: result.rows[0].now };
     } catch (err) {
       console.error('Database connection error', err);
       return { message: 'Database connection failed', error: err };
     }
  }
  static async findAll(): Promise<User[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  static async create(user: User): Promise<User> {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [user.name, user.email]
    );
    return result.rows[0];
  }
}
