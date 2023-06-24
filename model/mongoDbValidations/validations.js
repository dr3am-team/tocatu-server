/* CAPACITY */
function validateCapacity(value) {
  return value > 0 && value < 1000000;
}

const capacityError = "Los límites de capacidad son incorrectos";

/* NAME */
const nameError = "El nombre debe tener al menos 3 caracteres";

/* ADDRESS */
const addressError = "La dirección debe tener al menos 3 caracteres";

/* PASSWORD */
const passwordError = "La contraseña debe tener al menos 3 caracteres";

/* PRICE */
function validatePrice(value) {
  return value > 0 && value < 10000000;
}

const priceError = "Los límites de capacidad son incorrectos";

export default {
  validateCapacity,
  capacityError,
  nameError,
  addressError,
  passwordError,
  validatePrice,
  priceError,
};
