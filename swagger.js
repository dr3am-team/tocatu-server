import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Tocatu API", version: "1.0.0" }
  },
  apis: [
    "./routes/UserRoute.js",
    "./routes/BarRoute.js",
    "./model/mongoDbValidations/BarModel.js",
    "./model/mongoDbValidations/UserModel.js"
  ]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Documentación disponible en http://localhost:${port}/api/docs`);
};

export default swaggerDocs;
