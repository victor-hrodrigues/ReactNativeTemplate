/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    // @ts-ignore
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
