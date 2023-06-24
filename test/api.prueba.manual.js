import supertest from "supertest";
import config from "../config.js";

const pruebaServidorConSuperTest = async () => {
  const url = `http://localhost:${config.PORT}/api/users`;

  try {
    const request = supertest(url);

    const rta = await request.get("/");
    const { status, body } = rta;

    console.log("status code", status);
    console.log("body", body);
  } catch (error) {
    console.log("error:", error.message);
  }
};

pruebaServidorConSuperTest();
