import { Sequelize } from "sequelize";
const sequelize = new Sequelize("tappay", "root", "Admin@123", {
  host: "localhost",
  dialect: "postgres",
});
export default sequelize;