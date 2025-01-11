import app from "./app";
import { createTable } from './models/userModel';

const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await createTable();
});
