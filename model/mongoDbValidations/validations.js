import { EMAIL_REGEX } from "../../utils/constants.js";

/* CAPACITY */
export function validateCapacity(value) {
  return value > 0 && value < 1000000;
}

export const capacityError = "Los límites de capacidad son incorrectos";

/* NAME */
export const nameError = "El nombre debe tener al menos 3 caracteres";

/* ADDRESS */
export const addressError = "La dirección debe tener al menos 3 caracteres";

/* PASSWORD */
export const passwordError = "La contraseña debe tener al menos 3 caracteres";

/* PRICE */
export function validatePrice(value) {
  return value > 0 && value < 10000000;
}

export const priceError = "El precio es incorrecto";

/* EMAIL */
export function validateMail(email) {
  return EMAIL_REGEX.test(email);
}
export const mailError = "El formato del mail es incorrecto";
