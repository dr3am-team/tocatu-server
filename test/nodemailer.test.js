import { expect } from "chai";
import generador from "./generador/generador.js";
import nodemailer from "../utils/nodemailer.js";

const mailOptions = generador.getMail();
describe("NODEMAILER TEST", () => {
  describe("Envío del mail:", () => {
    it("Debería enviar un mail", async () => {
      try {
        const mailEnviado = await nodemailer.useNodemailer(mailOptions);
        expect(mailEnviado.accepted == mailOptions.receiver).to.be.true;
      } catch (error) {
        console.log(error);
        throw new Error("Email sending failed.");
      }
    });
  });

describe('Email Validation', () => {
  it('should validate a well-formatted email address', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    expect(mailOptions.receiver).to.match(emailRegex);
  });

});

});
