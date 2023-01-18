import * as yup from 'yup';
import { AuthErrorMsg } from '../../constants/AuthErrorMsg';
import { Regex } from '../../constants/Regex';

export const authSchema = yup
  .object({
    email: yup
      .string()
      .email(AuthErrorMsg.emailRegex)
      .required(AuthErrorMsg.emailRequired),
    password: yup
      .string()
      .min(5, AuthErrorMsg.passwordMin)
      .matches(Regex.regexPasswd, AuthErrorMsg.passwordRegex)
      .matches(Regex.regexSpacing, AuthErrorMsg.passwordSpacing)
      .required(),
  })
  .required();
