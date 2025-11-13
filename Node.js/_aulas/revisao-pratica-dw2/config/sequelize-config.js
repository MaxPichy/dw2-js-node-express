import Sequelize from "sequelize";
import { rootCertificates } from "tls";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    timezone: "-03:00",
    database: "filmes"
});

export default connection;