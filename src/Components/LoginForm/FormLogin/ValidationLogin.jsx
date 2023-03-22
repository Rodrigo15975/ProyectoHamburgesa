import * as yup from "yup";

export const LoginValidationSchena = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Debe ser un correo electrónico válido"
    )
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{1,10}).{6,}$/,
      "Ingrese correctamente su contraseña"
    )
    .required("La contraseña es obligatoria"),
});
