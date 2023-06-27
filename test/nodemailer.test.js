import { expect } from "chai";
import generador from "./generador/generador.js";
import nodemailer from "../utils/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();

const mailOptions = generador.getMail();
describe("NODEMAILER TEST", () => {
  describe("Validación del mail", () => {
    it("Debería validar un mail correcto:", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      expect(mailOptions.receiver).to.match(emailRegex);
    });
  });
  describe("Envío del mail:", () => {
    it("Debería enviar un mail:", async () => {
      try {
        const mailEnviado = await nodemailer.useNodemailer(mailOptions);
        expect(mailEnviado.accepted == mailOptions.receiver).to.be.true;
      } catch (error) {
        console.log(error);
        throw new Error("Email sending failed.");
      }
    });
  });
});
