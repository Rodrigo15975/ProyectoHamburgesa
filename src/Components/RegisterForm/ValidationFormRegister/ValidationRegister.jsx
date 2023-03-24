import * as yup from "yup";

export const RegisterValidationSchena = yup.object().shape({
  date: yup
    .date()
    .required("La fecha de nacimiento es requerida")
    .max(
      new Date(
        new Date().getFullYear() - 18,
        new Date().getMonth(),
        new Date().getDate()
      ),
      "Debes ser mayor de 18 años para registrarte"
    )
    .typeError("La fecha de nacimiento es requerida")
    .test(
      "is-valid-date",
      "La fecha de nacimiento no es válida",
      function (value) {
        return value instanceof Date && !isNaN(value);
      }
    ),
  terminos: yup
    .boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),

  genero: yup
    .string()
    .oneOf(
      ["masculine", "femenine", "other"],
      "Debe seleccionar un género válido"
    )
    .required("El género es obligatorio"),

  username: yup
    .string()
    .matches(
      /^[A-Z][a-záéíóúüñ]+$/,
      "El username debe comenzar con mayúscula y contener sólo letras"
    )
    .min(7, "Mínimo 7 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Debe ser un correo electrónico válido"
    )
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe ser minimo 8 caracteres")
    .max(30, "El limite de la contraseña es 30 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{1,10}).{6,}$/,
      "Debe contener al menos una mayúscula, una minúscula y numeros"
    )
    .required("La contraseña es obligatoria"),
});
